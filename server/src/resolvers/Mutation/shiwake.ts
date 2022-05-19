import { Prisma, Shiwake } from ".prisma/client"
import { Context } from "../../index"


interface ShiwakeCreateArgs {
    input: {
        hasseiDate: string
        tekiyou: string
        kariCd: number
        kariName: string
        kariKingaku: number
        kashiCd: number
        kashiName: string
        kashiKingaku: number

    }
}

interface ShiwakePayloadType {
    userErrors: {
        message: String
    }[],
    shiwake: Shiwake | Prisma.Prisma__ShiwakeClient<Shiwake> | null
}

interface ShiwakeId {
    shiwakeId: number
}

export const shiwakeRosolvers = {
    shiwakeCreate: async (parent: any, { input }: ShiwakeCreateArgs, { prisma, userInfo }: Context): Promise<ShiwakePayloadType> => {
        //    console.log(`atResolver:${userInfo?.userId}`) 
        //    console.log(`inputAtResolver:${input.kariKingaku}`)
        // if (!userName || !mail)
        //     return {
        //         userErrors: [{ message: "You must provide both userName and mail." }],
        //         user: null
        //     }
        // console.log({userInfo})
        //ここから下６行をコメントアウト　5/5 16:31
        if (!userInfo) {
            return {
                userErrors: [{ message: "Not authenticated." }],
                shiwake: null,
            }
        }

        const shiwakeDone = await prisma.shiwake.create({
            data: {
                ...input,
                //下１行をコメントアウト 　5/5 16:31
                userId: userInfo.userId
                //下の１行を加えた
                // userId:1,
            }
        })
        return {
            userErrors: [],
            // shiwake: prisma.shiwake.create({
            //     data: {
            //         ...input,
            //         //下１行をコメントアウト 　5/5 16:31
            //         // userId: userInfo?.userId
            //         //下の１行を加えた
            //         userId:1,
            //     }
            // })
            shiwake: shiwakeDone

        }
    },

    shiwakeDelete: async (parent: any, { shiwakeId }: ShiwakeId, { prisma, userInfo }: Context): Promise<ShiwakePayloadType> => {
        // console.log(`atResolver:${userInfo?.userId}`) 
        // console.log(`inputAtResolver:${input.kariKingaku}`)
        // if (!userName || !mail)
        //     return {
        //         userErrors: [{ message: "You must provide both userName and mail." }],
        //         user: null
        //     }
        // console.log({userInfo})
        //ここから下６行をコメントアウト　5/5 16:31
        if (!userInfo) {
            return {
                userErrors: [{ message: "Not authenticated." }],
                shiwake: null,
            }
        }
console.log(`shiwakeIdforDel:${shiwakeId}`)
        const shiwakeDeleted = await prisma.shiwake.delete({
            where: {
                id: Number(shiwakeId),
            },
        }
        )
        return {
            userErrors: [],
            // shiwake: prisma.shiwake.create({
            //     data: {
            //         ...input,
            //         //下１行をコメントアウト 　5/5 16:31
            //         // userId: userInfo?.userId
            //         //下の１行を加えた
            //         userId:1,
            //     }
            // })
            shiwake: shiwakeDeleted

        }
    }
}