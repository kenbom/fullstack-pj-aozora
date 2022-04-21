import React from "react";
import { menuItems } from "../../config/dataMenuItems";

export const MenuItem = () => {
  const menu = menuItems;
  return (
    <div>
      <p>Test</p>
      {menu.map((item) => {
        return <p key={item.kamokuCd}> {item.kamokuMei}</p>;
      })}
      <p>Test</p>
      <p>Test</p>
    </div>
  );
};
