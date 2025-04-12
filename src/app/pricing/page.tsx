"use client";

import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { HolderItemImage } from "./_sections/holder-item-image";
import { ProductDetails } from "./_sections/product-details";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/container";
import { ProductDescription } from "./_sections/product-description";
import { ProductInformation } from "./_sections/product-information";
import { ProductReview } from "./_sections/product-review";

const Pricing = () => {
  const tabsItems = [
    {
      id: "description",
      label: "Descriptions",
      content: <ProductDescription />,
    },
    {
      id: "information",
      label: "Additional Information",
      content: <ProductInformation />,
    },
    {
      id: "review",
      label: "Review",
      content: <ProductReview />,
    },
  ];
  return (
    <div>
      <div className="h-[30vh] w-screen flex items-center justify-center bg-[url(https://s3-alpha-sig.figma.com/img/e2b8/5c88/b69dddd8030373ce446343ba9356ce4e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TZ1PwVHuv2-f9zU6FGeFStXKcVE2lrUmWjshP-~rwxRN4~gRV9t9gzw3148Fo7dcOG8i-z1Dzi-lY2rU881lDwH-oiKrH2ciMwjTHpM4UZWbV8A1PD3Rj~0vt4xAzG-iJKLyG5Bvbx71aqXiTsIfj1weRrY1iznGZKBNMKB2z~l8ZRFUCinNaNzNQwFjC-XEGzXQhfVUARxlul6GFhPq6WB3s1zMz9E4OMSIbroIgnW1uNkpxCpMfmEINxi-VWdCZzTRvwNdtAVkUc9qB4V55Bo~K0iJsSgRC-mLssvy2AasFKalwm~vPENR5EQ2aW0gfSM49tjjc7y-xgDdwQMiCQ__)] bg-no-repeat bg-center  bg-cover">
        <SectionHeading title="Pricing" className="text-center" />
      </div>

      {/* content section */}
      <div className="">
        <div className="p-6">
          <ProductDetails />
        </div>
      </div>

      {/* underline tabs full-width */}
      <Container>
        <Tabs defaultValue="account" className="relative w-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            {tabsItems.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none "
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsItems.map((item) => (
            <TabsContent key={item.id} value={item.id} className=" py-10">
              {item.content}
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </div>
  );
};

export default Pricing;
