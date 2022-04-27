// import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { VFC } from "react";
import { kamokuList } from "../../config/dataKamokuList";
import {
  strdGrpCd,
  strdMenuItem,
  strdShiwakeData,
} from "../../store/strdGrpCd";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Box, Grid, GridItem } from "@chakra-ui/react";
// import { useSetShiwakeTouroku } from "./hooks/useSetShiwakeTouroku";

export type KamokuMenuItem = {
  kamokuMenuGrpCd: number;
  kamokuMenuCd: number;
  kamokuMenuMei: string;
};

export type ShiwakeData = {
  kariKamokuGrpCd: number;
  kariKamokuCd: number;
  kariKamokuMei: string;
  kashiKamokuGrpCd: number;
  kashiKamokuCd: number;
  kashiKamokuMei: string;
};
type KamokuProps = { kamokuMenuGrpCd: number };

function selectKamokuGrp(
  kamokuMenuGrpCd: number,
  kamokuList: KamokuMenuItem[]
): KamokuMenuItem[] {
  const selectedKamokus = kamokuList.filter(
    (kamoku: KamokuMenuItem) => kamoku.kamokuMenuGrpCd === kamokuMenuGrpCd
  );
  return selectedKamokus;
}

function getPreShiwakeData(kamokuItem: KamokuMenuItem): ShiwakeData {
  const { kamokuMenuGrpCd, kamokuMenuCd, kamokuMenuMei } = kamokuItem;
  if (kamokuMenuGrpCd === 4)
    return {
      kariKamokuGrpCd: 3,
      kariKamokuCd: 302,
      kariKamokuMei: "事業主借",
      kashiKamokuGrpCd: kamokuMenuGrpCd,
      kashiKamokuCd: kamokuMenuCd,
      kashiKamokuMei: kamokuMenuMei,
    };
  else if (kamokuMenuGrpCd === 5)
    return {
      kariKamokuGrpCd: 3,
      kariKamokuCd: 302,
      kariKamokuMei: "事業主貸",
      kashiKamokuGrpCd: kamokuMenuGrpCd,
      kashiKamokuCd: kamokuMenuCd,
      kashiKamokuMei: kamokuMenuMei,
    };
  return {
    kariKamokuGrpCd: 0,
    kariKamokuCd: 0,
    kariKamokuMei: "未定",
    kashiKamokuGrpCd: 0,
    kashiKamokuCd: 0,
    kashiKamokuMei: "未定",
  };
}

export const MenuItem: VFC<KamokuProps> = (props) => {
  const kamokuMenuItems: KamokuMenuItem[] = kamokuList;
  const { kamokuMenuGrpCd } = props;
  const selectedKamokus = selectKamokuGrp(kamokuMenuGrpCd, kamokuMenuItems);
  const [changedGrpCd, setChangedGrpCd] = useRecoilState(strdGrpCd);
  // const [changedMenuItem, setChangedMenuItem] = useRecoilState(strdMenuItem);
  const setChangedMenuItem = useSetRecoilState(strdMenuItem);
  const setPreShiwakeData = useSetRecoilState(strdShiwakeData);
  // const filledMenuItem = useSetShiwakeTouroku(item);
  function handleOnClick(kamokuItem: KamokuMenuItem): void {
    const preShiwakeData = getPreShiwakeData(kamokuItem);
    setPreShiwakeData(preShiwakeData);
  }
  // const filledShiwakeTouroku = useSetShiwakeTouroku()
  return (
    <div>
      {selectedKamokus.map((item) => {
        return (
          //<h3 key={item.kamokuCd} onClick={() => { setChangedGrpCd( item.kamokuCd )}}>
          <Box
            key={item.kamokuMenuCd}
            _hover={{ color: "blue.200" }}
            onClick={() => {
              handleOnClick(item);
            }}
          >
            {item.kamokuMenuMei}
          </Box>
        );
      })}
    </div>
  );
};
