"use client";

import { useGetBlogsQuery, useGetSingleBlogQuery } from "@/redux/api/blogs";

// interface IGameSlide {
//   id: string;
//   posterImg: string;
//   gameName: string;
//   date: string;
//   site: string;
// }
export const useGetSingleBlog = (blogId: string) => {
  const { data, isLoading } = useGetSingleBlogQuery({ blog: blogId });

  if (!data) return { blogSlide: [], isBlogPending: isLoading };
  return {
    isBlogPending: isLoading,
    blog: data?.data || {},
  };
};
