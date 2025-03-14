import { GameItemBox } from "@/components/boxes";
import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { HorizontalAccordion } from "./horizontal-accordio";

export const GamingProductShowing = () => {
  return (
    <div className="after:content-[''] after:bg-red-500 after:absolute after:bottom-0 w-">
      <div className="text-center">
        <div className="pt-8">
          <SectionHeading title="Igniting a lifelong passion" className="pb-0" />
        </div>
        <p className="w-3/3 md:w-1/3 mx-auto pb-8">
          Looking for more? NexaGear has a full lineup of gaming accessories,
          from mousepads to headsets, that bring comfort, precision, and style
          to your setup.
        </p>
      </div>

      {/* <div className="flex justify-center items-center mt-10 py-10 bg-[url(https://s3-alpha-sig.figma.com/img/41dd/5594/517be32273d495af450b6c5040436a82?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cwCVTVg4DsBp0qFVNWuU42~dkkU1cyZfqvRV~g9RiOt1f8qMHmz-Bz34pd3NKpEw5QKxLN1hjyAankersPp-qrHMsgMzQ3fzRy-~i-8dKXQAposhCH80oFueHctXd3ltZfYtUEFmCkxu~6X5JFdaMz~F5GBIdIcAT1HT8IaplweOwxrJp6~-ZETw52GRjz0rg~HmBj785DWvtnHZ2u3UliuM84TIt2ZwfbzBVMyzjyUF-ZPj24NJfoML91Ud7XJfCi3lUw6ABkOkJD75C3xW2cW4jFhMpNps-EeDIxzpw2dYf8pwvk7oDDhXhfK564EhGxo2fikbNN3KN8zJ~Eu-wQ__)] bg-no-repeat bg-cover bg-bottom">
        <div className="flex justify-center items-center">
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
        </div>
      </div> */}

      <HorizontalAccordion />
    </div>
  );
};
