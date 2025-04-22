"use client";

import { useGetBlogsQuery } from "@/redux/api/blogs";

// interface IGameSlide {
//   id: string;
//   posterImg: string;
//   gameName: string;
//   date: string;
//   site: string;
// }
export const useGetAllBlogs = () => {
  const { data, isLoading } = useGetBlogsQuery(undefined);
  const blogsSlideData = data?.data?.data.map((blog) => ({
    id: blog._id,
    posterImg: blog.image || "/images/posters/poster-15.png",
    title: blog.name || "Introductiong check6 extraction dlc",
    description: blog.description || "Introductiong check6 extraction dlc",
    date: blog.createdAt || "N/A",
    site: "Visit Site",
  }));

  if (!blogsSlideData) return { blogSlide: [], isBlogPending: isLoading };
  return { blogSlide: blogsSlideData, isBlogPending: isLoading };
};
