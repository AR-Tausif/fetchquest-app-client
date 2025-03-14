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
      image:
        "https://s3-alpha-sig.figma.com/img/a633/0d1d/c5d715af9db17cca864eef07d92d6969?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A~nlEnJpwHCjWHxDJzzvUYdr4hDOS635Tdq-wKRaiWljdnAgB8Q~1o1VFtF39cbRrcz5Ew6BQdjMIjtIiVq4aakTlxjOkHS8Umb1NJ4xh6jNK3094MWFcHXoGatfIQrBfmJvpQPdt0OgV2Ew8OXtdY7vndoAjd5bYyc3-Ol2hKUamGDqFFFatO8JYvaziRtO0p55YzLtSdKqmEflhLvrxy0ZHBgQ1lHq0QFC5wfusqWDNjOMVriF9cN4WC0gWn7938qsOxkxCOhK4gZYd5AZbAPE-qi3QQMU~wafyt0ENuRQQVLa1gq0ZImH~EJde2lkSf6g3WP~GJWm0zdiibYEXg__",
    },
    {
      description: "Our work is our playground",
      image:
        "https://s3-alpha-sig.figma.com/img/d26c/c3bc/1baf6be4ec991dec634efbacfefdec3c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Yo7Sz5cqBbofPv-lGM9CYDh0xOuAGUBc4smN1eOOaJ-7~BGG5POkDNE~HFv47YRi8wdKE59SshmSNfGVJN1znPNp-1xxnUD1svRh6m8e1O7mdbW4DV1K~7EgSeNAk35xcTksYTJnJTFy5oNpT0OhrQpSHio6rmfnvQ69Wf1rvedJpdI1x2e2oA4MJZWYBksIhjumaUAS9Py0Nh8NoaVZAEHsT7BofwJjnM-RQLyZIUjyQbIfLCQHeJn4UFpTO-nElAGgkwGmrpj3020SQsr1IAXIERhdY5r6jWirIfKP-sJRPy0kqOUurO7~ynYvaT~e7RThpoG8EBBRccT3cZUX9g__",
    },
    {
      description: "Our work is our playground",
      image:
        "https://s3-alpha-sig.figma.com/img/0f4f/7aad/8d77525fe1455293f1720a1d30c5144a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tzX3i30QYOeLQOv6rY~-cEq20kW6ZlrsYBcCmA8gErci4aH-1k9VRopNGxcSRGKviSxnAxW72pOHSAPQzquX1uspTR7WKzGVQIb2KdDCAiWqvWTIiwDOi4ntbn3uFCjijwocD349oBCZEuSZ~K5Qq7GZ0ceLT9Pe0gs18fzcYg7Svt4cpDrEKCNDtLwWP7GfhSu2mfaD4TF14hWWsc1utBqw~StCYCSKVema1A-kGx9AE8QDORt0MpaVZ9lXbcCBDRjxpyoEqJGC2606CSSVmeNFkePxyZVq0HBFu7oqF~0r1UHyQr5~1vl90PwL--pySepP0bubWDD3AwFlz3mcYg__",
    },
    {
      description: "Our work is our playground",
      image:
        "https://s3-alpha-sig.figma.com/img/abf9/5f93/80dd8ea948455b643ced000684e7d053?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YoYBIh9Jop9~vA6Yr6iMbC9HE2~IVbeT7YJwomHlOIERy3UznVtHKeroM8sQRTDoiD6E17RLGHq6QLop3DB4-nr~CkgmXC5bbSczT11dKDP2Ob4gftSauej1XU0K~1maaSg~f~HMSROyZYCs32XaAhrFF~BpJzCHwzLJM93TfiSPPepKDcea2M210EBkU7C90HmymbwGhgjItNZbcqUOV7NArsTrVMBoL0ou0ZbNJ1qk~VkR7PAwY79usQMawghx4LUM9MD9qi8ySSyyVyQp-EmegM868AvjqPoVHXgUSovBNJlOpNe4aIPqQDNVZr23c7l7MmEJHXVqXR7p7GIJlg__",
    },
    {
      description: "Our work is our playground",
      image:
        "https://s3-alpha-sig.figma.com/img/340a/51cb/481cce80e0af36b6fa3d9320d4bf2391?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oNYl8yQSjYuevCwj3qUrUfPsSlxipuslMSe9kunDhTZwbkq1~B6LhuT501uaIl419p8aCF~NYaPp0ZWQLTXf9qOS0gR6HbuasfDhwWr8QY1ops-jRxtvLDC0kxeTJeswwozrxT9e06H~TvFdUPkpn5BSK8UZAFnPtK80~KYJktSHiJeCVHNRq-Jtu0~QxOtO5iLtr~BDOTZDTZ39xCTlt2UmjvOEwVKbuNE4QyUpqzhhXlG0FqjTxyI-1cONwjDI3M~XifUZ~VRc0mJF6lsFCt5fITS78fP1iN9mvj2HVa03uXRCIFot-VwxBkn0kzKnmf2d2RGieiY1GPytfA5o1A__",
    },
  ];
  return (
    <div className="overflow-hidden">
      {/* header hero section */}
      <div className="w-screen min-h-[40vh] bg-[url(https://s3-alpha-sig.figma.com/img/0c50/e478/175bbb4cf2c042133a473f963c88f14f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QjHzfcRiK4MRoKoyDewXUUWzWC9mV3cJs3h6ox01eQqdcvx5PdZ-t8qf4oKhPgUbMi8EJ70sUQpN0punbxU2~VF73~zWq8o8axdnKbkOC-MffDIJmuLg-mb2iaOjlVwccnCguoxRYfCuZLvu6dv-qo8ELsE4FGILAVybmTchbiQHtRJfHt-L16FVqTFPijTIRj5STZMMpD1riM0UEdQNmeIxXwbN-PP9OV4OZyh6vyqLmVaXI-4APtgpFvpOfx4Qy202N7fVMoyvtTnUCQoZ9Fy0cOoYCRIm7XaWWkqO4i8dSuSOJK7xgCCsPD1g847AyvyUlVIAEoEbxUvOXDEK-g__)] bg-no-repeat  bg-cover bg-center">
        <VideoEmbed />
      </div>

      <div className='relative py-16 bg-[url(https://s3-alpha-sig.figma.com/img/41dd/5594/517be32273d495af450b6c5040436a82?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cwCVTVg4DsBp0qFVNWuU42~dkkU1cyZfqvRV~g9RiOt1f8qMHmz-Bz34pd3NKpEw5QKxLN1hjyAankersPp-qrHMsgMzQ3fzRy-~i-8dKXQAposhCH80oFueHctXd3ltZfYtUEFmCkxu~6X5JFdaMz~F5GBIdIcAT1HT8IaplweOwxrJp6~-ZETw52GRjz0rg~HmBj785DWvtnHZ2u3UliuM84TIt2ZwfbzBVMyzjyUF-ZPj24NJfoML91Ud7XJfCi3lUw6ABkOkJD75C3xW2cW4jFhMpNps-EeDIxzpw2dYf8pwvk7oDDhXhfK564EhGxo2fikbNN3KN8zJ~Eu-wQ__)] bg-no-repeat bg-cover after:content-[""] after:absolute after:inset-0 after:w-full after:h-full after:bg-black/50 after:-z-20 z-20'>
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
