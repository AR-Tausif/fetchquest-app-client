import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";
import { IBlogResponse } from "@/types/redux/blogs";

const blogsApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<IResponse<IBlogResponse>, undefined>({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
  }),
});

export const { useGetBlogsQuery } = blogsApi;
