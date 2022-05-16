import React, { VFC } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Box,
  Center,
} from "@chakra-ui/react";
import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import {
  InputControl,
  PercentComplete,
  ResetButton,
  SubmitButton,
  CheckboxSingleControl
} from "formik-chakra-ui"
import { GraphQLEnumType } from 'graphql';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('正しいメールアドレスを入力してください').required('メールアドレスは必須です'),
});

export const Signin: VFC = () => {
  return (
    <Box >
      <Center>
        <Box w="300px" p="20px" border="1px" bgColor="white" mt='50px'>
          <Formik initialValues={{
            email: '',
            password: '',
          }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              setTimeout(() => {
                alert(JSON.stringify(values, null , `  `))
              }, 1000)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* <Field name="firstName" />
                {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='firstName'>First name</FormLabel> */}
                <InputControl name='email' label='メールアドレス' />
                {/* <FormErrorMessage>{form.errors.firstName}</FormErrorMessage> */}
              {/* </FormControl> */}
            {/* )} */}
                {/* {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null} */}
                {/* <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
                <Field name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                <InputControl name='password' label='パスワード' />
                <SubmitButton mt={4} color="gray.800" bgColor="gray.200"
                  // colorScheme='blue'
                  type='submit'>Signin</SubmitButton>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </Box>
  );
}
