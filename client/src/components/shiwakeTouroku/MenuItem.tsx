import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { VFC } from "react";
import { kamokuList } from "../../config/dataKamokuList";

type KamokuItem = {
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

function pushKamokuGrpCd():void{
  console.log("clicked");
}

export const MenuItem: VFC<KamokuProps> = (props) => {
  const kamokuItems: KamokuItem[] = kamokuList;
  const { kamokuGrpCd } = props;
  const selectedKamokus = selectKamokuGrp(kamokuGrpCd, kamokuItems);
  return (
    <div>
      {selectedKamokus.map((item) => {
        return (
          <h3 key={item.kamokuCd} onClick={() => console.log('clicked')}>
              <button onClick={pushKamokuGrpCd}>test</button>
            {""}
            {item.kamokuMei}
          </h3>
        );
      })}
    </div>
  );
};
