import { BlogInnerCard, NewsBlogCard } from "@/components/cards";
import { Container } from "@/components/container";

export const BlogHeroSection = () => {
  return (
    <section className="w-screen z-20 relative before:content-[''] before:absolute before:bg-black before:w-full before:h-[35%] before:-z-10 before:bg-[url(https://s3-alpha-sig.figma.com/img/f5b4/5a40/316490cf61634e8c4eec002e688f5a03?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sbn2X0rWampiLgYXmenxmyI6haCpV1KBMz-VoJtbPTyDe1Zb1-MxoLLMYknuQBoiC3nUXaRgENkIQJuw5vZjVF9k3vUwpn4MtWyWahk1gs9jWphUduCoqpbmQ9Ps8T-2Q7STGTQeG2Abgf5PX7sJcIvloBs8BVHecT6GQLGCrBAQpp2ZBBM-VRWKafrJ1TGMVxrMNiZZcJGNVEJYM9x8g2RvzHmAITcJEBMdwyV5-39kMCiN0rBbumLM99nPdDgVRJqHbcke4AtW1Oo51q61GSucMIUqELDkv34WQd7hI-IY78Ow3izCgEhjaxkj79PVxV6jBI0ZJyuXKzsZj7kbVw__)] before:bg-no-repeat before:bg-cover before:bg-center md:before:h-[55%]">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center pt-32 gap-6">
          <div className="">
            <NewsBlogCard />
          </div>
          <div className="space-y-4 w-full md:w-1/2 px-0 md:px-0 sm:px-12">
            <BlogInnerCard />
            <BlogInnerCard />
          </div>
        </div>
      </Container>
    </section>
  );
};
