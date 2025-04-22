import { IProfileResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";

const authApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<IProfileResponse, undefined>({
      query: () => ({
        url: "/users/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    editProfile: builder.mutation<IProfileResponse, FormData>({
      query: (editFormBody) => ({
        url: "/users/update-my-profile",
        method: "PATCH",
        body: editFormBody,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetProfileQuery, useEditProfileMutation } = authApi;
