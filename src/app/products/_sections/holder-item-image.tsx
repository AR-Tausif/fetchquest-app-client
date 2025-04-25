import Image from "next/image";

export const HolderItemImage = ({
  productName,
  image,
  onclick,
}: {
  image: string;
  productName: string;
  onclick?: () => void;
}) => {
  return (
    <div
      className="w-[100px] h-[120px] border border-[#DA5DA3] p-1 rounded-md"
      onClick={onclick}
    >
      <Image
        src={image}
        className="w-full h-full object-cover"
        width={1000}
        height={1000}
        alt={productName}
      />
    </div>
  );
};
