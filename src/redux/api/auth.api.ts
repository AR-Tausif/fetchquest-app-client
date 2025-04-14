import {
  IAuthResponse,
  ILoginInfo,
  IRegisterInfo,
  IVerifyOTP,
} from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";

const authApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, ILoginInfo>({
      query: (userInfo: ILoginInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation<IAuthResponse, IRegisterInfo>({
      query: (userInfo: IRegisterInfo) => ({
        url: "/auth/create",
        method: "POST",
        body: userInfo,
      }),
    }),
    verifyOtp: builder.mutation<IAuthResponse, IVerifyOTP>({
      query: (otp: IVerifyOTP) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: otp,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyOtpMutation } =
  authApi;
