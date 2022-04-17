import React, { useState,  useEffect, useCallback, VFC } from "react";

interface Shiwake {
  kamoku: string;
  kamokuGroup: number;
  kingaku: number;
}
export const useTestFunc = () => {
  const [test, setTest] = useState({
    kamoku: "",
    kamokuGroup: 1,
    kingaku: 0,
  });

 setTest({
    kamoku: "費用",
    kamokuGroup: 2,
    kingaku: 1000,
  });

  return (
  test)
};
