import {
  IAuthResponseData,
  ILoginInfo,
  IRegisterInfo,
  IResponse,
  IVerifyOTP,
} from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { store } from "../store";
import { tagTypes } from "../tag.types";

const authApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<IAuthResponseData>, ILoginInfo>({
      query: (userInfo: ILoginInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth]
    }),
    register: builder.mutation<IResponse<IAuthResponseData>, IRegisterInfo>({
      query: (userInfo: IRegisterInfo) => ({
        url: "/auth/create",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.auth]
    }),
    verifyOtp: builder.mutation<IResponse<IAuthResponseData>, IVerifyOTP>({
      query: (otp: IVerifyOTP) => {
        const token = store.getState().auth.token;
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: otp,
          headers: {
            token: token ? token : "",
          },
        };
      },
      invalidatesTags: [tagTypes.user, tagTypes.auth]
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyOtpMutation } =
  authApi;
