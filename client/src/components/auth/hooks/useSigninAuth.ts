import React from 'react'
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { queryKeys } from "../../../config/queryKeys"

type SigninArgs = {
    credentials: {
        mail: string
        password: string
    },
}

async function setSignin(credentials: SigninArgs) {
    localStorage.clear()
    const endpoint = BASE_URL
    const client = new GraphQLClient(endpoint)

    const mutation = gql`
        mutation Signin($credentials: CredentialsInput) {
        signin(credentials: $credentials) {
            token 
            }
        }
    `
    const serverToken = await client.request(mutation, credentials)
    console.log(serverToken)
}

export function useSigninAuth(): UseMutateFunction<
    void,
    unknown,
    SigninArgs,
    unknown
> {
    const toast = useCustomToast()
    const queryClient = useQueryClient()

    const { mutate } = useMutation((newSigninArgs: SigninArgs) =>
        setSignin(newSigninArgs),
        {
            onSucess: () => {
                queryClient.invalidateQueries([queryKeys.useSigninAuth]);
                toast({
                    title: '登録完了しました。',
                    status: 'success',
                });
            },
        }
    );
    return mutate;
}

