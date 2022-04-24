import React, { VFC } from "react";
import { Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {MenuItem} from "./MenuItem"

export type kamokuMenuProps = {
  name: string,
  flug: boolean,
}

export const KamokuMenu: VFC<kamokuMenuProps> = (props) => {
  return (
    <Box
      //m={4}
      height="100%"
      width="100%"
      border="1px"
      rounded="2xl"
      color="gray.700"
      fontSize="sm"
      textAlign="center"
    >
      {props.name}
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                収入取引
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <MenuItem kamokuGrpCd={4}></MenuItem>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                支出取引
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <MenuItem kamokuGrpCd={5}></MenuItem>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                両建取引
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <MenuItem kamokuGrpCd={1}></MenuItem>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}