import {atom} from 'recoil'

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
  default: undefined,
})