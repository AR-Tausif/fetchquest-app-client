import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { useGetSingleBlog } from "@/hooks/rtk-queries/useGetSingleBlog";
import { AtSign, CalendarDays, Tag } from "lucide-react";
import SingleBlogDetails from "../_sections/single-blog-details";

interface IProps {
  params: Promise<{ blog: string }>;
}
const Blog = async ({ params }: IProps) => {
  console.log({ params }, "sajutyjkjj");
  const blogId = (await params).blog;
  return (
    <Container>
      <SingleBlogDetails blogId={blogId} />
    </Container>
  );
};
export default Blog;
