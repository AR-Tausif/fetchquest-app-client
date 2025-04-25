import { IMyProfile, IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";

const usersApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<IResponse<IMyProfile>, undefined>({
      query: () => ({
        url: "/users/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user, tagTypes.auth],
    }),

    editProfile: builder.mutation<IResponse<IMyProfile>, FormData>({
      query: (editFormBody) => ({
        url: "/users/update-my-profile",
        method: "PATCH",
        body: editFormBody,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth],
    }),
  }),
});

export const { useGetProfileQuery, useEditProfileMutation } = usersApi;
