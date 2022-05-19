import React from "react";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { GraphQLClient, request, gql } from "graphql-request";
import { BASE_URL } from "../../../config/constants";
import { atom, useRecoilState } from "recoil";
import type { StrdMenuItem } from "../../../store/strdStates";
import { strdMenuItem } from "../../../store/strdStates";
import { useCustomToast } from "../../app/hooks/useCustomToast";
// import {useCustomToast} from ""
import type { ShiwakeInput } from "../../shiwakeTouroku/ShiwakeTouroku";
import type { Shiwakes } from "./useSeisanHyou";
import { queryKeys } from "../../../config/queryKeys";
import { useSeisanHyou } from "./useSeisanHyou";

type ShiwakeId = {
    shiwakeId: string,
}

async function setSeisanHyouSakujo(strInput: string) {
    console.log(`checkIdUse:${JSON.stringify(strInput)}`)
    const endpoint = BASE_URL;
    const tokenObj = localStorage.getItem("token");
    const auth = JSON.parse(tokenObj);
    const parsedInput = JSON.parse(input)
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: auth,
        },
    });
    const mutation = gql`
    mutation shiwakeDelete($input: ShiwakeDeleteArgs) {
      shiwakeDelete(input: $input) {
        userErrors {
          message
        }
      }
    }
  `;
    const requestHeaders = {
        authorization: auth,
    };
    const data = await client.request(mutation, parsedInput, requestHeaders);
    // console.log(`returnedData:${JSON.stringify(data)}`);
}

export function useShiwakeSakujo(): UseMutateFunction<
    void,
    unknown,
    string,
    unknown
> {
    const toast = useCustomToast();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        (shiwakeId: string) => setSeisanHyouSakujo(shiwakeId),
        
        {
            onSuccess: () => {
                queryClient.refetchQueries([queryKeys.useSeisanHyou]);
                queryClient.invalidateQueries([queryKeys.useShiwakeTouroku]);
                toast({
                    title: "削除完了しました。",
                    status: "success",
                });
            },
        }
    );
    return mutate;
}
