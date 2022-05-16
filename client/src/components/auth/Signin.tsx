import React, {VFC} from 'react'
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

export const Signin:VFC = () => {
    function validateName(value:string | undefined) {
      let error;
      if (!value) {
        error = "Name is required";
      } else if (value.toLowerCase() !== "naruto") {
        error = "Jeez! You're not a fan 😱";
      }
      return error;
    }

  return (
    <Box >
      <Center>
        <Box w="300px" p="20px" border="1px" bgColor="white" mt='50px'>
          <Formik
            initialValues={{ name: "Sasuke" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">メール</FormLabel>
                      <Input {...field} id="name" placeholder="name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">パスワード</FormLabel>
                      <Input {...field} id="name" placeholder="name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </Box>
  );
}
