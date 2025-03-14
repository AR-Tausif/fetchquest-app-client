import { cn } from "@/lib/utils";

export const HorizontalAccFirstItemCard = ({
  activeIndex,
  index,
}: {
  activeIndex: number|null;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-4 transition-all duration-300 ease-in-out",
        activeIndex === 1-1 ? "flex-row" : "",
        activeIndex === null ? "" : ""
      )}
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/e2cc/4eb2/a4fa23f52560406783dce89118a35c58?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hfCEmL~bmvs~lvX0VMNOBl1mI~iGx5dzgN32gnLveXVJjQYfj8XObBi-G~NqZx50x4KGLD-9A5BOZ-8OvIDh4tyaoPAEjJKoLuss6ZPOejBgyICtysQRKxsmrivmFp29JoVdzgzgwZQ7qVkTSfWzvt9tCn~lzE6oExVpIGRWGycIX3fo6umoGlio7h3syu~gUdHlMcUquzfKHiVLoqNK8iZ50~PKBF8g2TWJqsut9oWJRvx9K7kLDLlIwf2oYChzXB7z5EcKsHzO~L7MK5awTbxG5WYgqAVtejeFpJHWJjSAUFreuzrZdwBq23woM97bhSKj5Tw1ia6Wuhc4RqwA8w__"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border transition-all duration-300 ease-in-out"
      />
      <img
        src="https://s3-alpha-sig.figma.com/img/c356/4907/4cba4476165acf8a441759af882d2bde?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XC-SmB~3qoyk~gxNtmkx15nyKoZnzW8bvz9BwoK3WaWWZE6Kx1fUkFImhMcUDosi~Qbwht0NRxCCb76zkTLf1--QtabFP0GpxSlWnprEMkoyVWBecb-DyMZvditCq6FdFhoO8J1Gj98of0x-mU3sPtX~fxvX6JdzIRdK0P-~BokyUjIbRPna40sYonk~ChJr7NIY6BHpccH6Kjdxu5AVzB9KcJGFxLMBgYoV1P7O6xRCTxFRu4hBVkjNmAWWclP0XZA0ivD-aJZlyUGAohygL8NcE37RE8N~~uofgm-t4w8vlOeN38cSAMxoWwzaVAFyaz4jClQ1D-xUFhQxucn8Ig__"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border"
      />
      <img
        src="https://s3-alpha-sig.figma.com/img/f349/ec07/c36d655353fe7597e7e9cbd659d3c601?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XEiwWF9U6CIL78ncPzv4MJH0AltPdmLxKB0VF5DMzW86MJ5pWTILYCw-GOcM0~XEs4nA5~tLRKkkBEqSmiJiUq7YD4K-Vwdl~aPjUGPQdZaVn9ffCqvJD4huj~6A1vrZewlV-KRp99UCfV3mX~eFpIhxPRJ59LC654sCNR~4-XN~SIVbzGeAAj9BNv1XaHmXCqSHZKdXyd-a6RsAR-zMCXTGA54KBNdEH4GPSNNz8HSUVaGdXL3xc-8NaKCUJCOSj0BG8EHb3dc1Xgosvf2lzWVWy1jRMzdrmoM3--veT1xZPGp9~ndkEhSF8Hc3bLqNtHZpT182oVkysjv11dM~Ag__"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border"
      />
    </div>
  );
};
