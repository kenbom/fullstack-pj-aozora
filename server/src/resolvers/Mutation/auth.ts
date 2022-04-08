import { User } from ".prisma/client"
import { Context } from "../../index"
import validator from "validator"

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
    user: User | null
}

export const authResolvers = {
    signup: async (parent: any, { input }: UserCreateArgs, { prisma }: Context): Promise<UserPayloadType> => {
        const { userName, mail, password } = input

        if (!userName || !mail)
            return {
                userErrors: [{ message: "You must provide both userName and mail." }],
                user: null
            }

        const isEmail = validator.isEmail(mail)

        if (!isEmail) {
            return {
                userErrors: [{
                    message: "Inavalid mail"
                }],
                user: null
            }
        }

        const user = await prisma.user.create({
            data: {
                ...input
            }
        })
        return {
            userErrors: [],
            user: user

        }
    }
}
