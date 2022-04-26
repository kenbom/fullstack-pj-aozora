import React from "react";
import { atom, useRecoilState } from "recoil";
import type { StrdMenuItem } from "../../../store/strdGrpCd";
import { strdMenuItem } from "../../../store/strdGrpCd";
import type { KamokuItem } from "../MenuItem";

export function useSetShiwakeTouroku(kamokuItem: KamokuItem): KamokuItem {
  return kamokuItem;
}
