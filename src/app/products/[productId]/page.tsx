"use client";

import { SectionHeading } from "@/components/top-headings/SectionHeading";
import { ProductDescription } from "../_sections/product-description";
import { ProductInformation } from "../_sections/product-information";
import { ProductReview } from "../_sections/product-review";
import { ProductDetails } from "../_sections/product-details";
import { Container } from "@/components/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetSingleProduct } from "@/hooks/rtk-queries/useGetSingleProduct";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AppButton } from "@/components/buttons/app-button";
import { IProduct } from "@/types/redux/products";
import { SingleProductSekeleton } from "@/components/skeleton/single-product-skeleton";

interface PageProps {
  params: {
    productId: string;
  };
}

export default function ProductPage({ params }: PageProps) {
//   const { isAuthenticated } = useIsAuthenticated();
  const { product, isProductPending } = useGetSingleProduct(params.productId);
  const tabsItems = [
    {
      id: "description",
      label: "Descriptions",
      content: <ProductDescription productDescription={product?.details!} />,
    },
    // {
    //   id: "information",
    //   label: "Additional Information",
    //   content: <ProductInformation />,
    // },
    // {
    //   id: "review",
    //   label: "Review",
    //   content: <ProductReview />,
    // },
  ];
  return (
    <>
      {isProductPending ? (
        <SingleProductSekeleton />
      ) : (
        <div>
          <div className="h-[30vh] w-screen flex items-center justify-center bg-[url(/images/banners/profile-banner-img.png)] bg-no-repeat bg-center  bg-cover">
            <SectionHeading
              title={"PREMIUM EQUIPMENT"}
              className="text-center"
            />
          </div>

          {/* content section */}

          <div className="">
            <div className="p-6">
              <ProductDetails product={product as IProduct} />
            </div>
          </div>

          {/* underline tabs full-width */}
          <Container>
            <Tabs defaultValue={tabsItems[0].id} className="relative w-full">
              <TabsList
                defaultChecked
                className="w-full justify-start rounded-none border-b bg-transparent p-0"
              >
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
      )}
    </>
  );
}
