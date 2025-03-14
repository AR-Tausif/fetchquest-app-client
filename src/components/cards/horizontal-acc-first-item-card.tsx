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
        src="https://s3-alpha-sig.figma.com/img/e2cc/4eb2/a4fa23f52560406783dce89118a35c58?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hfCEmL~bmvs~lvX0VMNOBl1mI~iGx5dzgN32gnLveXVJjQYfj8XObBi-G~NqZx50x4KGLD-9A5BOZ-8OvIDh4tyaoPAEjJKoLuss6ZPOejBgyICtysQRKxsmrivmFp29JoVdzgzgwZQ7qVkTSfWzvt9tCn~lzE6oExVpIGRWGycIX3fo6umoGlio7h3syu~gUdHlMcUquzfKHiVLoqNK8iZ50~PKBF8g2TWJqsut9oWJRvx9K7kLDLlIwf2oYChzXB7z5EcKsHzO~L7MK5awTbxG5WYgqAVtejeFpJHWJjSAUFreuzrZdwBq23woM97bhSKj5Tw1ia6Wuhc4RqwA8w__"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border"
      />
      <img
        src="https://s3-alpha-sig.figma.com/img/e2cc/4eb2/a4fa23f52560406783dce89118a35c58?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hfCEmL~bmvs~lvX0VMNOBl1mI~iGx5dzgN32gnLveXVJjQYfj8XObBi-G~NqZx50x4KGLD-9A5BOZ-8OvIDh4tyaoPAEjJKoLuss6ZPOejBgyICtysQRKxsmrivmFp29JoVdzgzgwZQ7qVkTSfWzvt9tCn~lzE6oExVpIGRWGycIX3fo6umoGlio7h3syu~gUdHlMcUquzfKHiVLoqNK8iZ50~PKBF8g2TWJqsut9oWJRvx9K7kLDLlIwf2oYChzXB7z5EcKsHzO~L7MK5awTbxG5WYgqAVtejeFpJHWJjSAUFreuzrZdwBq23woM97bhSKj5Tw1ia6Wuhc4RqwA8w__"
        alt="game photo"
        className="w-[210px] h-[240px] rounded-md object-cover border"
      />
    </div>
  );
};
