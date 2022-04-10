import { User } from ".prisma/client"
import { Context } from "../../index"
import validator from "validator"
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken"
import { JSON_SIGNATURE } from "../../keys"
import isEmail from "validator/lib/isEmail"

interface SignupArgs {
    credentials: {
        mail: string
        password: string
    },
    userName: string
}

interface SigninArgs {
    credentials: {
        mail: string
        password: string
    }, 
}

interface UserPayloadType {
    userErrors: {
        message: string
    }[],
    token: string | null
}

export const authResolvers = {
    signup: async (
        parent: any,
        { credentials, userName }: SignupArgs,
        { prisma }: Context): Promise<UserPayloadType> => {
        const { mail, password } = credentials

        if (!userName || !mail)
            return {
                userErrors: [{ message: "You must provide both userName and mail." }],
                token: null
            }

        const isEmail = validator.isEmail(mail)
        if (!isEmail) {
            return {
                userErrors: [{
                    message: "Inavalid mail"
                }],
                token: null
            }
        }

        const isValidPassword = validator.isLength(password, { min: 4 })
        if (!isValidPassword) {
            return {
                userErrors: [{
                    message: "Inavalid password"
                }],
                token: null
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                userName,
                mail,
                password: hashedPassword,
            }
        })

        const token = await JWT.sign(
            {
                userID: user.id,
                mail: user.mail,
            },
            JSON_SIGNATURE,
            {
                expiresIn: 3600000,
            })

        return {
            userErrors: [],
            token,
        }
},

    signin: async (_: any, {credentials}:SigninArgs, {prisma}:Context):Promise<UserPayloadType> => {
        const { mail, password } = credentials

        const user = await prisma.user.findUnique({where: {mail}})

        const token =await JWT.sign(
            {
                mail: mail,
                password: password
            },
            JSON_SIGNATURE,
            {
                expiresIn: 3600000,
            }) 

        return {
            userErrors: [],
            token,
        }
    },
}
