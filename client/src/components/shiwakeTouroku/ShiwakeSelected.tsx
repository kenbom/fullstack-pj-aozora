import React, { VFC, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  VStack,
  Center,
  ButtonGroup,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { strdGrpCd, strdTekiyou } from "../../store/strdStates";
import { strdShiwakeData } from "../../store/strdStates";
import { Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useShiwakeTouroku } from "./hooks/useShiwakeTouroku";
import { useSeisanHyou } from "../seisanHyou/hooks/useSeisanHyou";
import { ValuesOfCorrectTypeRule } from "graphql";
import { ArrowRightIcon } from "@chakra-ui/icons";
import DatePicker, { CalendarContainer } from "react-datepicker";

// type ShiwakePropsType = {
//   date: Date;
//   //   tekiyou?: string;
// };

const ShiwakeTourokuSchema = Yup.object().shape({
  kingaku: Yup.string()
    .matches(/^[0-9!]*$/, "半角数字にて入力してください")
    .max(9, "金額の制限を超えています")
    .required("必須項目です"),
  tekiyou: Yup.string().max(20, "10文字以内で入力してください"),
});

export const ShiwakeSelected = () => {
  const [atomShiwakeData, setAtomShiwakeData] = useRecoilState(strdShiwakeData);
  const [kingaku, setKingaku] = useState(undefined);
  const [tekiyou, setTekiyou] = useState(undefined);
  const changeKingaku = (e: any) => {
    setKingaku(e.target.value);
  };
  const changeTekiyou = (e: any) => {
    setTekiyou(e.target.value);
  };
  //   const [atomTekiyou, setAtomTekiyou] = useRecoilState(strdTekiyou);
  //   const { date } = props;

  const mutateShiwake = useShiwakeTouroku();
  const Today = new Date();
  const [date, setDate] = React.useState(Today);
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  const shiwakeInput = {
    input: {
      hasseiDate: date.toISOString(),
      tekiyou: tekiyou,
      kariCd: atomShiwakeData.kariKamokuCd,
      kariName: atomShiwakeData.kariKamokuMei,
      kariKingaku: Number(kingaku),
      kashiCd: atomShiwakeData.kashiKamokuCd,
      kashiName: atomShiwakeData.kashiKamokuMei,
      kashiKingaku: Number(kingaku),
    },
  };
  return (
    <>
      <GridItem
        rowSpan={1}
        colSpan={2}
        // border="1px"
        // color="gray.100"
      >
        {/* <HStack spacing="1px" mt={2} ml={5}> */}
        {/* <HStack> */}
        {/* <Box></Box> */}
        <HStack>
          <Box w="40%" color="gray.300" paddingLeft="10px" paddingRight="-50px">
            日付を選択してください
          </Box>
          <ArrowRightIcon w="10px" color="gray.300" />
          <Box w="40%" marginLeft="-20px">
            <DatePicker
              placeholderText=""
              onChange={(selectedDate) => {
                setDate(selectedDate || Today);
              }}
              calendarContainer={MyContainer}
              monthsShown={2}
              showPreviousMonths
              selected={date}
            ></DatePicker>
          </Box>
          {/* </HStack> */}
        </HStack>
        {/* </HStack> */}
      </GridItem>
      <Formik
        initialValues={{
          kingaku: "",
          tekiyou: "",
        }}
        validationSchema={ShiwakeTourokuSchema}
        onSubmit={async (values, { resetForm }) => {
          //   const signinArgs = {
          //     credentials: {
          //       mail: values.email,
          //       password: values.password,
          //     },
          //   };
          //   await setKingaku(undefined);
          await mutateShiwake(shiwakeInput);
          //   await setAtomTekiyou(undefined);
          resetForm();
        }}
      >
        {({ handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit as any}>
            <GridItem rowSpan={3} colSpan={2} textAlign="center">
              <HStack spacing="8px">
                <VStack w="50%">
                  {atomShiwakeData.hyoujiPtn === "L" ? (
                    <Center w="80%" h="40px" bg="cyan.50">
                      {" "}
                      借方：{atomShiwakeData.kariKamokuMei}{" "}
                    </Center>
                  ) : atomShiwakeData.hyoujiPtn === "R" ? (
                    <Center w="80%" h="40px">
                      借方：{atomShiwakeData.kariKamokuMei}{" "}
                    </Center>
                  ) : (
                    <Center w="80%" h="40px" bg="cyan.50">
                      {" "}
                      借方：{atomShiwakeData.kariKamokuMei}{" "}
                    </Center>
                  )}

                  <Box>
                    <InputControl
                      //type="text"
                      //   value={kingaku}
                      name="kingaku"
                      inputProps={{
                        placeholder: "金額を入力してください",
                        color: "gray.800",
                      }}
                      fontSize="sm"
                      w="100%"
                      onChange={changeKingaku}
                    />
                  </Box>
                </VStack>
                <VStack w="50%">
                  {atomShiwakeData.hyoujiPtn === "R" ? (
                    <Center w="80%" h="40px" bg="cyan.50">
                      {" "}
                      貸方：{atomShiwakeData.kashiKamokuMei}{" "}
                    </Center>
                  ) : atomShiwakeData.hyoujiPtn === "L" ? (
                    <Center w="80%" h="40px">
                      貸方：{atomShiwakeData.kashiKamokuMei}{" "}
                    </Center>
                  ) : (
                    <Center w="80%" h="40px" bg="cyan.50">
                      {" "}
                      貸方：{atomShiwakeData.kashiKamokuMei}{" "}
                    </Center>
                  )}
                  <Box>
                    <InputControl
                      name="tekiyou"
                      inputProps={{
                        placeholder: "取引メモが入力できます",
                        color: "gray.800",
                      }}
                      fontSize="sm"
                      w="100%"
                      colorScheme="gray"
                      color="gray.300"
                      onChange={changeTekiyou}
                    />
                  </Box>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <SubmitButton
                w="90%"
                mt={2}
                pb={1}
                colorScheme="gray"
                type="submit"
                disabled={isSubmitting}
              >
                登録
              </SubmitButton>
            </GridItem>
          </Form>
        )}
      </Formik>
    </>
  );
};
