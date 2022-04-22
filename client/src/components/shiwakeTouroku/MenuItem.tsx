import { Item } from "framer-motion/types/components/Reorder/Item";
import React, { VFC } from "react";
import { kamokuList } from "../../config/dataKamokuList";
import { strdGrpCd } from '../../store/strdGrpCd'
import { atom, useRecoilState } from 'recoil';


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

export const MenuItem: VFC<KamokuProps> = (props) => {
  const kamokuItems: KamokuItem[] = kamokuList;
  const { kamokuGrpCd } = props;
  const selectedKamokus = selectKamokuGrp(kamokuGrpCd, kamokuItems);
  const [changedGrpCd, setChangedGrpCd] = useRecoilState(strdGrpCd)

  return (
    <div>
      {selectedKamokus.map((item) => {
        return (
          <h3 key={item.kamokuCd} onClick={() => { setChangedGrpCd( kamokuGrpCd )}}>
            {item.kamokuMei}
          </h3>
        );
      })}
    </div>
  );
};
