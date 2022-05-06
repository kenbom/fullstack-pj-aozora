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

export const shiwakeRosolvers = {
    shiwakeCreate: async (parent: any, { input }: ShiwakeCreateArgs, { prisma }: Context): Promise<ShiwakePayloadType> => {
        
        // if (!userName || !mail)
        //     return {
        //         userErrors: [{ message: "You must provide both userName and mail." }],
        //         user: null
        //     }
        // console.log({userInfo})
        //ここから下６行をコメントアウト　5/5 16:31
        // if (!userInfo) {
        //     return {
        //         userErrors: [{ message: "Not authenticated." }],
        //         shiwake: null
        //     }
        // }
       
        const shiwake = await prisma.shiwake.create({
            data: {
                ...input,
                //下１行をコメントアウト 　5/5 16:31
                // userId:userInfo.userId,
                //下の１行を加えた
                userId:1,
            }
        })
        return {
            userErrors: [],
            shiwake: shiwake

        }
    }
}