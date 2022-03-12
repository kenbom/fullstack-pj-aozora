import { Context } from "../index"

export const Query = {
    users: async(_: any, __: any, { prisma }: Context) => {
        const users = await prisma.user.findMany()
    
    return users}
}