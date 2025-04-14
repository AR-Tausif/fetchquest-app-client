import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { tagTypesList } from "../tag.types";

const baseURL = "http://192.168.40.76:3000/api";
const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
  credentials: "include",
});

export const fetchquestBaseApi = createApi({
  reducerPath: "fetchquestApi",
  baseQuery,
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
