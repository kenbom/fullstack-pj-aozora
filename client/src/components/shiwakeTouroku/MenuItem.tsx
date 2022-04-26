import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { VFC } from "react";
import { kamokuList } from "../../config/dataKamokuList";
import { strdGrpCd, strdMenuItem } from "../../store/strdGrpCd";
import { atom, useRecoilState } from "recoil";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useSetShiwakeTouroku } from "./hooks/useSetShiwakeTouroku";

export type KamokuItem = {
  kamokuGrpCd: number;
  kamokuCd: number;
  kamokuMei: string;
};
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

export const MenuItem: VFC<KamokuProps> = (props) => {
  const kamokuItems: KamokuItem[] = kamokuList;
  const { kamokuGrpCd } = props;
  const selectedKamokus = selectKamokuGrp(kamokuGrpCd, kamokuItems);
  const [changedGrpCd, setChangedGrpCd] = useRecoilState(strdGrpCd);
  const [changedMenuItem, setChangedMenuItem] = useRecoilState(strdMenuItem);
  const filledMenuItem = useSetShiwakeTouroku(item);
  function onClickHandler(kamokuGrpCd: KamokuItem) {
    // console.log(kamokuGrpCd);
  }
  // const filledShiwakeTouroku = useSetShiwakeTouroku()
  return (
    <div>
      {selectedKamokus.map((item) => {
        return (
          //<h3 key={item.kamokuCd} onClick={() => { setChangedGrpCd( item.kamokuCd )}}>
          <Box
            key={item.kamokuCd}
            _hover={{ color: "blue.200" }}
            onClick={() => {
              onClickHandler(item);
              
            }}
          >
            {item.kamokuMei}
          </Box>
        );
      })}
    </div>
  );
};
