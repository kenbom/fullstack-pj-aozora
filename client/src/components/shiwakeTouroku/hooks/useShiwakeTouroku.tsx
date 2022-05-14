import React from "react";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { atom, useRecoilState } from "recoil";
import type { StrdMenuItem } from "../../../store/strdStates";
import { strdMenuItem } from "../../../store/strdStates";
import { useCustomToast } from '../../app/hooks/useCustomToast';
// import {useCustomToast} from ""
import type { ShiwakeInput } from "../ShiwakeTouroku";
import type { Shiwakes } from "../../seisanHyou/hooks/useSeisanHyou";
import { queryKeys } from "../../../config/queryKeys" 

async function setSeisanHyou(input: ShiwakeInput) {
  localStorage.clear()
  console.log(input);
  const endpoint = BASE_URL;
  // localStorage.saveKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJpYXQiOjE2NTI0MDAwNTYsImV4cCI6MTY1NjAwMDA1Nn0.2hY4gpW4C-4tZeXZBG7j1JEW67FOymHlL2NcoP2zKmc";
  localStorage.saveKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJpYXQiOjE2NTIxNTQ0MzUsImV4cCI6MTY1NTc1NDQzNX0.nAkGAiHpP9ZH80zqeTHm-Kmpq9QGo2QH2aVo8iNy9uM";

  const auth = localStorage.saveKey
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: auth
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJpYXQiOjE2NTIxNTQ0MzUsImV4cCI6MTY1NTc1NDQzNX0.nAkGAiHpP9ZH80zqeTHm-Kmpq9QGo2QH2aVo8iNy9uM",
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJpYXQiOjE2NTI0MDAwNTYsImV4cCI6MTY1NjAwMDA1Nn0.2hY4gpW4C-4tZeXZBG7j1JEW67FOymHlL2NcoP2zKmc"
    },
  });
  const mutation = gql`
    mutation ShiwakeCreate($input: ShiwakeCreateArgs) {
    shiwakeCreate(input: $input) {
    
    userErrors {
      message
      }
    }
  }                          
  `;
  const requestHeaders = {
    authorization:auth
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJpYXQiOjE2NTIxNTQ0MzUsImV4cCI6MTY1NTc1NDQzNX0.nAkGAiHpP9ZH80zqeTHm-Kmpq9QGo2QH2aVo8iNy9uM"
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJpYXQiOjE2NTI0MDAwNTYsImV4cCI6MTY1NjAwMDA1Nn0.2hY4gpW4C-4tZeXZBG7j1JEW67FOymHlL2NcoP2zKmc"
  }
  const data = await client.request(mutation, input, requestHeaders);
  console.log(`returnedData:${JSON.stringify(data)}`)


}
export function useShiwakeTouroku(): UseMutateFunction<
  void,
  unknown,
  ShiwakeInput,
  unknown
> {
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((newshiwakeInput: ShiwakeInput) =>
    setSeisanHyou(newshiwakeInput),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.useShiwakeTouroku]);
        toast({
          title: '登録完了しました。',
          status: 'success',
        });
      },
    }
  );
  return mutate;
}
