import { authResolvers } from "./auth";
import { kamokuResolvers } from "./kamoku";

export const Mutation = {
    ...kamokuResolvers,
    ...authResolvers,
};
