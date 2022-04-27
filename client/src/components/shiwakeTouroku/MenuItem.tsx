import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { VFC } from "react";
import { kamokuList } from "../../config/dataKamokuList";
import { strdGrpCd, strdMenuItem , strdShiwakeData } from "../../store/strdGrpCd";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useSetShiwakeTouroku } from "./hooks/useSetShiwakeTouroku";

export type KamokuItem = {
  kamokuGrpCd: number;
  kamokuCd: number;
  kamokuMei: string;
};

export type ShiwakeData = {
  kariKamokuGrpCd: number;
  kariKamokuCd: number;
  kariKamokuMei: string;
  kasiKamokuGrpCd: number;
  kasiKamokuCd: number;
  kasiKamokuMei: string;
}
type KamokuProps = { kamokuGrpCd: number };

function selectKamokuGrp(
  kamokuGrpCd: number,
  kamokuList: KamokuItem[]
): KamokuItem[] {
  const selectedKamokus = kamokuList.filter(
    (kamoku: KamokuItem) => kamoku.kamokuGrpCd === kamokuGrpCd
  );
  return selectedKamokus;
}

function getPreShiwakeData(kamokuItem: KamokuItem): ShiwakeData {
  const preShiwakeData = {
    kariKamokuGrpCd: 4,
    kariKamokuCd: 401,
    kariKamokuMei: "売上",
    kasiKamokuGrpCd: 5,
    kasiKamokuCd: 501,
    kasiKamokuMei: "事業主借",
  }
  return preShiwakeData
}

export const MenuItem: VFC<KamokuProps> = (props) => {
  const kamokuItems: KamokuItem[] = kamokuList;
  const { kamokuGrpCd } = props;
  const selectedKamokus = selectKamokuGrp(kamokuGrpCd, kamokuItems);
  const [changedGrpCd, setChangedGrpCd] = useRecoilState(strdGrpCd);
  // const [changedMenuItem, setChangedMenuItem] = useRecoilState(strdMenuItem);
  const setChangedMenuItem = useSetRecoilState(strdMenuItem);
  const setPreShiwakeData = useSetRecoilState(strdShiwakeData)
  // const filledMenuItem = useSetShiwakeTouroku(item);
  function handleOnClick(kamokuItem: KamokuItem): void {
    const  preShiwakeData= getPreShiwakeData(kamokuItem)
    setPreShiwakeData(preShiwakeData)
  }
  // const filledShiwakeTouroku = useSetShiwakeTouroku()
  return (
    <div>
      {selectedKamokus.map((item) => {
        return (
          //<h3 key={item.kamokuCd} onClick={() => { setChangedGrpCd( item.kamokuCd )}}>
          <Box key={item.kamokuCd} _hover={{ color: "blue.200" }} onClick={() => { handleOnClick(item) }} >
            {item.kamokuMei}
          </Box>
        );
      })}
    </div>
  );
};
