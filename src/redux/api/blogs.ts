import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";
import { IBlog, IBlogResponse } from "@/types/redux/blogs";

const blogsApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<IResponse<IBlogResponse>, undefined>({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    getSingleBlog: builder.query<IResponse<IBlog>, { blog: string }>({
      query: (blogInfo) => ({
        url: `/blogs/${blogInfo.blog}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = blogsApi;
