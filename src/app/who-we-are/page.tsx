"use client";
import "./styles.css";

import { HorizontalImageGallery } from "@/components/horizontal-image-gallery";
import { SectionHeading } from "@/components/top-headings/SectionHeading";

import { OurFact } from "@/app/_sections/our-fact";

import { GamerOverviewSection } from "./_section/gamer-overviews";
import { GamingProductShowing } from "./_section/gaming-product-showing";
import { OurStudios } from "./_section/our-studios";
import { VideoEmbed } from "@/components/VideoEmbed";

const WhoWeAre = () => {
  const gellaryContent = [
    {
      description: "Our work is our playground",
      image: "/images/pages/who-we-are/section-two/slide-img-1.png",
    },
    {
      description: "Our work is our playground",
      image: "/images/pages/who-we-are/section-two/slide-img-2.png",
    },
    {
      description: "Our work is our playground",
      image: "/images/pages/who-we-are/section-two/slide-img-3.png",
    },
    {
      description: "Our work is our playground",
      image: "/images/pages/who-we-are/section-two/slide-img-4.png",
    },
    {
      description: "Our work is our playground",
      image: "/images/pages/who-we-are/section-two/slide-img-5.png",
    },
  ];
  return (
    <div className="overflow-hidden">
      {/* header hero section */}
       <div className="w-screen min-h-[40vh] bg-no-repeat  bg-cover bg-center">
        <VideoEmbed />
      </div>

      <div className='relative py-16 bg-[url(/images/pages/who-we-are/section-two/container-bg.png)] bg-no-repeat bg-cover after:content-[""] after:absolute after:inset-0 after:w-full after:h-full after:bg-black/50 after:-z-20 z-20'>
        <div className="z-50">
          <SectionHeading
            className="text-white"
            title="where making a differece"
            />
          <HorizontalImageGallery gellaryContent={gellaryContent} />
        </div>
      </div>
 
      <GamingProductShowing />  
 
      <GamerOverviewSection />  
      <OurStudios />  
      <OurFact />
    </div>
  );
};

export default WhoWeAre;
