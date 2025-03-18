import { Container } from "@/components/container";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { AtSign, CalendarDays, Tag } from "lucide-react";

interface IProps {
  params: Promise<{ blog: string }>;
}
const Blog = ({ params }: IProps) => {
  console.log({ params }, "sajutyjkjj");
  return (
    <Container>
      <div className="space-y-6 px-4">
        <div className="p-0 md:px-8 w-full">
          <VideoEmbed placeholderImage="/images/pages/blogs/single-blog.jpg" />
        </div>

        <div className="space-y-10 flex flex-col justify-center items-center pb-10">
          <SectionHeading
            title="FC25 PREPARES FOR OCTOBER 2025 RELEASE WITH ENHANCED REALISM"
            className="w-full md:w-1/2 mx-auto text-center text-[2.5rem] leading-10 md:leading-normal"
          />

          <div className="flex flex-wrap gap-x-20 gap-y-4">
            <div className="flex gap-x-2">
              <CalendarDays className="text-gray-400" />
              <p>October 21, 2025</p>
            </div>
            <div className="flex gap-x-2">
              <AtSign className="text-gray-400" />
              <h4 className="uppercase text-[#DA5DA3] font-semibold">
                Fetch quest games
              </h4>
            </div>
            <div className="flex gap-x-2">
              <Tag className="text-gray-400" />
              <h4 className="uppercase text-[#DA5DA3] font-semibold">
                Company
              </h4>
            </div>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim tristique nulla
              aliquam ac quam. Mauris egestas fermentum sagittis sit. Sapien
              nunc odio congue iaculis faucibus tincidunt consectetur. Dui eget
              justo lectus a. Lacus egestas amet ac id hendrerit ligula pretium
              eu risus. Purus velit bibendum ac ut donec ut imperdiet proin
              proin. Fames vel eget eget est diam velit. Volutpat ipsum a
              aliquam amet. Interdum sed pharetra mi fermentum massa vestibulum.
              Suspendisse donec leo integer suspendisse sed et phasellus. Lacus
              morbi semper nec sem sagittis suspendisse at vivamus. Rutrum
              dignissim vestibulum pellentesque aliquam. Aliquam felis at id sed
              neque feugiat leo. Pulvinar dictum sed hac porta auctor diam.
              Purus magna nisi aliquet ac in. Amet eros lacus urna condimentum
              fermentum suscipit quam. In imperdiet aliquet eget cursus. At
              euismod facilisi consequat tellus volutpat odio diam amet turpis.
              Maecenas nibh sed sollicitudin at. Venenatis ac nullam dui at quis
              blandit. Ullamcorper et a habitant purus. Venenatis et non sit
              mattis dignissim donec. Pellentesque facilisi nam amet dignissim
              tortor. Porta ultrices consectetur adipiscing turpis arcu suscipit
              donec dictumst proin. Consequat arcu ultricies cursus morbi
              adipiscing in fermentum cursus egestas. Ac neque faucibus aenean
              elementum velit sit cras aliquet justo. Vestibulum non facilisi
              sed fames nunc nam. Tortor ut lectus erat eu. Diam pharetra
              fringilla lorem morbi blandit eget.
            </p>
          </div>

          {/* linking section of the blog */}
          <div className="w-full">
            <p>Follow Us:</p>
            <a href="">
              <p className="text-[#DA5DA3] underline underline-offset-4">
                www.abc.com
              </p>
            </a>
          </div>

          {/* another linking section of the blog */}
          <div className="w-full">
            <div className="flex gap-x-2">
              <p>Brodcast:</p>
              <a href="#">
                <p className="text-[#DA5DA3]">www.fetchquest.com</p>
              </a>
            </div>
            <div className="flex gap-x-2">
              <p>Instagram:</p>
              <a href="#">
                <p className="text-[#DA5DA3]">www.fetchquest.com</p>
              </a>
            </div>
          </div>

          <div className="w-20 h-1 bg-gray-800" />

          <div className="w-full">
            <p>Media Relations </p>
            <p>Josiane Betit </p>
            <p>514 831-0276 </p>
            <p>adc@videotron.ca </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Blog;
