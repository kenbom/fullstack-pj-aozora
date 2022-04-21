import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { ReactPropTypes, VFC } from "react";
import { kamokuList } from "../../config/dataKamokuList";
import { kamokuMenuProps } from "./KamokuMenu";

type KamokuItem = {
  kamokuGrpCd: number;
  kamokuCd: number;
  kamokuMei: string;
};
type KamokuProps = { kamokuGrpCd: number };
// type KamokuItems = {
//   kamokuItems: KamokuItem[];
// };

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
  return (
    <div>
      {selectedKamokus.map((item) => {
        return <p key={item.kamokuCd}> {item.kamokuMei}</p>;
      })}
    </div>
  );
};
