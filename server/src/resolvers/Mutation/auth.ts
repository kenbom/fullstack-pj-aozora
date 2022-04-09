import { User } from ".prisma/client"
import { Context } from "../../index"
import validator from "validator"
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken"
import { JSON_SIGNATURE } from "../../keys"

interface UserCreateArgs {
    input: {
        userName: string
        mail: string
        password: string
    }
}

interface UserPayloadType {
    userErrors: {
        message: string
    }[],
    token: string | null
}

export const authResolvers = {
    signup: async (parent: any, { input }: UserCreateArgs, { prisma }: Context): Promise<UserPayloadType> => {
        const { userName, mail, password } = input

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
    }
}
