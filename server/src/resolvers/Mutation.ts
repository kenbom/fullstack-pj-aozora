import { Context } from "../index"

// interface UserCreateArgs {
//     userName: string
//     mail: string
// }
export const Mutation = {
    userCreate: async (parent: any, { input }: any, { prisma }: Context) => {
        const {userName, mail} = input
        await prisma.user.create({
            data: {
                userName,
                mail,
            }
        })

        return null
    }
}