import { User } from ".prisma/client"
import { Context } from "../index"


interface UserCreateArgs {
    input: {
        userName: string
        mail: string
    }
}

interface UserPayloadType {
    userErrors: {
        message: String
    }[],
    user: User | null
}

export const Mutation = {
    userCreate: async (parent: any, { input }: UserCreateArgs, { prisma }: Context): Promise<UserPayloadType>=> {
        const {userName, mail} = input

        if (!userName || !mail)
            return {
                userErrors: [{message:"You must provide both userName and mail."}],
                user: null
            }

        const user = await prisma.user.create({
            data: {
                userName,
                mail,
            }
        })
        return {
            userErrors: [],
            user: user

        }
    }
}
