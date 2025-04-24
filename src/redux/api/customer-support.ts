import {
  ILoginInfo,
  IRegisterInfo,
  IResponse,
  IVerifyOTP,
} from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { store } from "../store";
import { ICustomerSupport } from "@/types/redux/customer-support";

const customerSupportApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    customerSupportMessageSent: builder.mutation<
      IResponse<ICustomerSupport>,
      ICustomerSupport
    >({
      query: (customerMsgBody) => ({
        url: "/contacts/add",
        method: "POST",
        body: customerMsgBody,
      }),
    }),
  }),
});

export const { useCustomerSupportMessageSentMutation } = customerSupportApi;
