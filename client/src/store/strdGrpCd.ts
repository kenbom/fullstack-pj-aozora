import {atom} from 'recoil'
import type {ShiwakeData} from "../components/shiwakeTouroku/MenuItem"

export type StrdMenuItem = {
  kamokuGrpCd: number,
  kamokuCd: number,
  kamokuMei: string,
}

export const strdGrpCd = atom<number>({
    key: 'strdGrpCd',
    default: undefined ,
  })

export const strdMenuItem = atom<StrdMenuItem>({
  key: 'strdMenuItem',
  default: {kamokuGrpCd:0, kamokuCd:0, kamokuMei:"未定"} 
})

export const strdShiwakeData = atom<ShiwakeData>({
    key: 'strdShiwakeData',
    default: {
      
            kariKamokuGrpCd: 0,
            kariKamokuCd: 0,
            kariKamokuMei: "未定",
            kasiKamokuGrpCd: 0,
            kasiKamokuCd: 0,
            kasiKamokuMei: "未定",
          
    }
})