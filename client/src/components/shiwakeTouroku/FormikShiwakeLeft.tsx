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
import { strdGrpCd } from "../../store/strdStates";
import { strdShiwakeData } from "../../store/strdStates";
import { Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import {
  InputControl,
  PercentComplete,
  ResetButton,
  SubmitButton,
  CheckboxSingleControl,
} from "formik-chakra-ui";
import { useShiwakeTouroku } from "./hooks/useShiwakeTouroku";
import { useSeisanHyou } from "../seisanHyou/hooks/useSeisanHyou";
import { ValuesOfCorrectTypeRule } from "graphql";

type ShiwakePropsType = {
  date: Date;
  tekiyou?: string;
};

const ShiwakeTourokuSchema = Yup.object().shape({
  kingaku: Yup.string()
    .matches(/^[a-zA-Z0-9!]*$/, "半角にて入力してください")
    // .min(2, "4文字以上で設定してください")
    .max(9, "金額の制限を超えています")
    .required("必須項目です"),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
//   tekiyou: Yup.string()
//     .matches(/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/, "英数字半角にて入力してください")
//     .email("正しいメールアドレスを入力してください")
//     .required("必須項目です"),
});

export const FormikShiwakeLeft = (props: ShiwakePropsType) => {
  const [atomShiwakeData, setAtomShiwakeData] = useRecoilState(strdShiwakeData);
  const [kingaku, setKingaku] = useState(undefined);
  const changeKingaku = (e: any) => {
    setKingaku(e.target.value);
  };
  const { date, tekiyou } = props;
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
  const mutateShiwake = useShiwakeTouroku();
  return (
    <>
      <Formik
        initialValues={{
          kingaku: "",
        }}
        validationSchema={ShiwakeTourokuSchema}
        onSubmit={() => {
        //   const signinArgs = {
        //     credentials: {
        //       mail: values.email,
        //       password: values.password,
        //     },
        //   };
          mutateShiwake(shiwakeInput);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, `  `));
          // }, 1000);
          
        }}
        // onReset={(values) => {
        //   values.email = "";
        //   values.password = "";
        // }}
      >            
        {({ handleSubmit, values }) => (
     <Form onSubmit={handleSubmit as any}>
        <GridItem rowSpan={3} colSpan={2} textAlign="center">
          <HStack spacing="8px">
            <VStack w="50%">
              <Center w="80%" h="40px" bg="cyan.50">
                借方：{atomShiwakeData.kariKamokuMei}
              </Center>
              <Box>
                <InputControl
                //type="text"
                //   value={kingaku}
                name="kingaku"
                  placeholder="金額を入力してください"
                  fontSize="sm"
                  w="100%"
                  onChange={changeKingaku}
                />
              </Box>
            </VStack>
            <VStack w="50%">
              <Center w="80%" h="40px">
                貸方：{atomShiwakeData.kashiKamokuMei}
              </Center>
              <Box
                color="gray.300"
                fontSize="sm"
                w="100%"
                h="35px"
                pb={1}
                pt={2}
              >
                <p>{kingaku}</p>
              </Box>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
            {/* <ButtonGroup> */}
          <SubmitButton
            w="90%"
            mt={2}
            pb={1}
            colorScheme="gray"
            type="submit"
            // onClick={() => {
            //   mutateShiwake(shiwakeInput);
            // }}
          >
            登録
          </SubmitButton>
          {/* </ButtonGroup> */}
        </GridItem>
        </Form>
        )}
      </Formik>
    </>
  );
};
