import Image from "next/image";

export const HolderItemImage = ({
  productName,
  image = "https://s3-alpha-sig.figma.com/img/f612/3fb8/c07b2c55ffba68ca961582f1a5976dd9?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=all9jKg2k5a58TmJ5rpDM8utj6OJdl44pI-qHLb4enL7eFCja7dRMZS7cex~YjfQg6Pn2vlFHfEjj1FRCnP~935CrZRkrXNbXZ53L8pQM-GH-0xIZk8J1Ou5LhSDH4fzq0QIlF6WWLgRIQG8tS9LbzLxljBuSr6fzux679~bhwA~uroXsOQb3Cqt9Y-iteQMdPPL3RTbkHFH0PKAPRitgW3jcz-nJtEFawAL8QLx9LfJ~hfBwAeUt33qiWBFZuefXiPlj79qbpKwDFfZYpzzCpKfrXIlJlqM8IXtBM7niqV1NIlQpknOZ3P3ZbNfgPRomHQvMNoP8XcROpTHQU168w__",
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
