import React from 'react'
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { queryKeys } from "../../../config/queryKeys"
import { redirect } from 'next/dist/server/api-utils';
import Router from 'next/router';
import { NextPage } from 'next'

type SigninArgs = {
    credentials: {
        mail: string
        password: string
    },
}

async function setSignin(credentials: SigninArgs) {
    // localStorage.clear()
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
    console.log(`afterSin:${JSON.stringify(serverToken)}`)
    // console.log(serverToken)
    if (serverToken) {
        localStorage.clear
        const lclStrg = JSON.stringify(serverToken.signin.token)
        localStorage.setItem("token", lclStrg)
        }
    const toShowLclStrg = localStorage.getItem("token")
    console.log(`lclStrg:${toShowLclStrg}`)
    if (serverToken) Router.push('/')
    

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
            // onSucess: () => {
            //     queryClient.invalidateQueries([queryKeys.useSigninAuth]);
            //     toast({
            //         title: '登録完了しました。',
            //         status: 'success',
            //     });
            // },
            onSuccess: () => {
                queryClient.invalidateQueries([queryKeys.useSigninAuth]);
                toast({
                    title: 'トークン取得しました。',
                    status: 'success',
                });
                queryClient.refetchQueries([queryKeys.useSeisanHyou])
            },
        }
    );
    return mutate
}


