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
  const client = new GraphQLClient(endpoint);
  const mutation = gql`{
    mutation ShiwakeCreate($input: ShiwakeCreateArgs) {
    shiwakeCreate(input: $input) {
    userErrors {
      message
    }
  }
}
  `;
  const data = await client.request(mutation, input);
  return data;
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
