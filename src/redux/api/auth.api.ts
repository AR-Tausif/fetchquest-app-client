import {
  IAuthResponseData,
  ILoginInfo,
  IRegisterInfo,
  IResponse,
  IVerifyOTP,
} from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { store } from "../store";

const authApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<IAuthResponseData>, ILoginInfo>({
      query: (userInfo: ILoginInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation<IResponse<IAuthResponseData>, IRegisterInfo>({
      query: (userInfo: IRegisterInfo) => ({
        url: "/auth/create",
        method: "POST",
        body: userInfo,
      }),
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
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyOtpMutation } =
  authApi;
