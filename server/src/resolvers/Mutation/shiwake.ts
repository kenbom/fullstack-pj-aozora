import { User } from ".prisma/client"
import { Context } from "../../index"


interface ShiwakeCreateArgs {
    input: {
        userName: string
        mail: string
    }
}

interface ShiwakePayloadType {
    userErrors: {
        message: String
    }[],
    user: User | null
}

export const shiwakeRosolver = {
    userCreate: async (parent: any, { input }: ShiwakeCreateArgs, { prisma }: Context): Promise<ShiwakePayloadType> => {
        const { userName, mail } = input

        if (!userName || !mail)
            return {
                userErrors: [{ message: "You must provide both userName and mail." }],
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