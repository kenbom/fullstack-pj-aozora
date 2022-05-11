import React from "react";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { atom, useRecoilState } from "recoil";
import type { StrdMenuItem } from "../../../store/strdStates";
import { strdMenuItem } from "../../../store/strdStates";
// import {useCustomToast} from ""
import type { ShiwakeInput } from "../ShiwakeTouroku";
import type { Shiwakes } from "../../seisanHyou/hooks/useSeisanHyou";

async function setSeisanHyou(input: ShiwakeInput) {
  console.log(input);
  const endpoint = BASE_URL;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJpYXQiOjE2NTIxNTQ0MzUsImV4cCI6MTY1NTc1NDQzNX0.nAkGAiHpP9ZH80zqeTHm-Kmpq9QGo2QH2aVo8iNy9uM",
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
    authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJpYXQiOjE2NTIxNTQ0MzUsImV4cCI6MTY1NTc1NDQzNX0.nAkGAiHpP9ZH80zqeTHm-Kmpq9QGo2QH2aVo8iNy9uM"
  }
  const data = await client.request(mutation, input, requestHeaders);


}
export function useShiwakeTouroku(): UseMutateFunction<
  void,
  unknown,
  ShiwakeInput,
  unknown
> {
  const { mutate } = useMutation((newshiwakeInput: ShiwakeInput) =>
    setSeisanHyou(newshiwakeInput)
  );
  return mutate;
}
