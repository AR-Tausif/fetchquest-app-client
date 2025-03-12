"use client";

import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { HolderItemImage } from "./_sections/holder-item-image";
import { ProductDetails } from "./_sections/product-details";

 const Pricing = () => {
  return (
    <div>
      <div className="h-[30vh] w-screen flex items-center justify-center bg-[url(https://s3-alpha-sig.figma.com/img/e2b8/5c88/b69dddd8030373ce446343ba9356ce4e?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OpTRBgu3NTCKZXNai3U5RxNIUq40LSj-0GbwlcYUyUlNUlT1P~MmJmhHJ1NV6atgPO~gZIZ4oSopP8g57qKQbz8agal9sBaPab1xfiFHb~oFyr4gZWA6ivhV~xEjMgHWYll8nCMaO2XMUfZnL1CFv1Y2lDCb8KARYKcXIJmenHZqmdh-euANSSUf249DTXM4XsYkvvzdbFlSBY7D25vXHasEvgyxoQD39uoqExPKn-WIJTVVpdWFfBfpBq32AtFofZkIHeINcEqbquGlXHx64ulAvDg2GJvn~XZfJkQcMucnTPIOBSiB7j58SUw6Am~LaW3puXayGHDVA8MF1~GYQg__)] bg-no-repeat bg-center  bg-cover">
        <SectionHeading title="Pricing" className="text-white text-center" />
      </div>

      {/* content section */}
      <div className="flex gap-x-4 items-center justify-center">
        <div className="space-y-5">
          <HolderItemImage />
          <HolderItemImage />
          <HolderItemImage />
        </div>
        <div className="p-6">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};


export default Pricing;