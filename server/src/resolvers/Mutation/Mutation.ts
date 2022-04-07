import { authResolvers } from "./auth";
import { kamokuResolvers } from "./kamoku";
import { shiwakeRosolvers } from "./shiwake";

export const Mutation = {
    ...kamokuResolvers,
    ...authResolvers,
    ...shiwakeRosolvers,
};
