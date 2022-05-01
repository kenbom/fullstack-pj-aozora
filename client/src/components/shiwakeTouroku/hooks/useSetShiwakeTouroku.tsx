import React from "react";
import { atom, useRecoilState } from "recoil";
import type { StrdMenuItem } from "../../../store/strdStates";
import { strdMenuItem } from "../../../store/strdStates";
import type { KamokuItem } from "../MenuItem";

export function useSetShiwakeTouroku(kamokuItem: KamokuItem): KamokuItem {
  return kamokuItem;
}
