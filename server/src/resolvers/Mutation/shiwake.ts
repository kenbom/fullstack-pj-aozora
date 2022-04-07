import { Shiwake } from ".prisma/client"
import { Context } from "../../index"


interface ShiwakeCreateArgs {
    input: {
        torihikiPtnCd: number
        torihikiName: string
        kariCd: number
        kariName: string
        kariKingaku: number
        kariGrpCd: number
        kariGrpName: string
        kariKubun: boolean
        kashiCd: number
        kashiName: string
        kashiKingaku: number
        kashiGrpCd: number
        kashiGrpName: string
        kashiKubun: boolean
        tekiyou: string
        hasseiDate: string
        userId: number
    }
}

interface ShiwakePayloadType {
    userErrors: {
        message: String
    }[],
    shiwake: Shiwake | null
}

export const shiwakeRosolvers = {
    shiwakeCreate: async (parent: any, { input }: ShiwakeCreateArgs, { prisma }: Context): Promise<ShiwakePayloadType> => {

        // if (!userName || !mail)
        //     return {
        //         userErrors: [{ message: "You must provide both userName and mail." }],
        //         user: null
        //     }

        const shiwake = await prisma.shiwake.create({
            data: {
                ...input
            }
        })
        return {
            userErrors: [],
            shiwake: shiwake

        }
    }
}