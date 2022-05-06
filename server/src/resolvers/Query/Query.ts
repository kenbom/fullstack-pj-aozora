import { Context } from "../../index"

export const Query = {
    users: async (_: any, __: any, { prisma }: Context) => {
        const users = await prisma.user.findMany()

        return users
    },

    hello: (parent: any, args: any, context: any) => "World!",

    kamokus: async (_: any, __: any, { prisma }: Context) => {
        const kamokus = await prisma.kamoku.findMany()

        return kamokus
    },

    shiwakes: async (_: any, __: any, { prisma }: Context) => {
        const kamokus = await prisma.shiwake.findMany()

        return kamokus
    }
}
