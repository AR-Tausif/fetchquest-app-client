import { useState } from "react";
import { GameItemBox } from "@/components/boxes";

export const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      bgUrl:
        "https://s3-alpha-sig.figma.com/img/e7db/889c/86e62d7bd87d8784e1f029798cec630c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qCbRJaZxeXgqdkBZQN4s2Fbh-HOpXSvjGTjddBuKe1A5ilIGAwnVsgt7aWQkrpj0Y8cvp82O76WpIzOhIDx2ODwy7fcC1O-yJuZyDe1LvpkOT7t1paYdKsMWTpM0iz3yX9LSkj6d0BTRFqdnJWRGNkfq47BCwVEuVh-fuwjUCTeuUyFuGku1tLF6xspa5jWkpEmH3~TTkyfwRmb7YVFTzLXKCwGodUFduK0eQid~8SpwEVToVl4hiLyAtjiWjTjKi~AP~R8h8wL76z29y-O1kv~diKmnIrkPPdofCkfmregXqJ1AckXiJemqmhDRjuHERP0jzdgEsjXieG~xM8Gy7g__",
      content: "",
    },
    {
      bgUrl:
        "https://s3-alpha-sig.figma.com/img/41dd/5594/517be32273d495af450b6c5040436a82?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cwCVTVg4DsBp0qFVNWuU42~dkkU1cyZfqvRV~g9RiOt1f8qMHmz-Bz34pd3NKpEw5QKxLN1hjyAankersPp-qrHMsgMzQ3fzRy-~i-8dKXQAposhCH80oFueHctXd3ltZfYtUEFmCkxu~6X5JFdaMz~F5GBIdIcAT1HT8IaplweOwxrJp6~-ZETw52GRjz0rg~HmBj785DWvtnHZ2u3UliuM84TIt2ZwfbzBVMyzjyUF-ZPj24NJfoML91Ud7XJfCi3lUw6ABkOkJD75C3xW2cW4jFhMpNps-EeDIxzpw2dYf8pwvk7oDDhXhfK564EhGxo2fikbNN3KN8zJ~Eu-wQ__",
      content: (
        <div className="flex justify-center items-center px-4">
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
        </div>
      ),
    },
    {
      bgUrl:
        "https://s3-alpha-sig.figma.com/img/19f0/15f2/2fcfebdf54403d18f95ff2723def90b8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kSE1kvtIjpkU9LMotKM~vmuagFyDvOm8ubE-OP35KxfcNr~sERR1OoDJlJo4n~iTWjK4lki5Jd7VQtEJz5Iw8MJ03Rr6ODnVkLr8lsrfLRDN3AGzKQ97-ms9MGM-ZVLn~3EDmaOqXuWHkVgUcmx~hIgaNcsZELh5-JtBJQt3Bdyz5fPIDWjSHh5Q8FkO9PD~uu3JZRw5dXfc3zSzlaMRBv3xh5NZwGBOmmiXTranNFkvrMC3F2X8ONiaVykdj4Q2EJUqBkOkBIxfth1WBmhnsz4g15jhKWO1bzWlS~d8KUAxs6M4vRJvcsp4MZ4ymuCdPjFaxTJLJ5d4wRegn5u08Q__",
      content: "",
    },
  ];

  return (
    <div className="w-full overflow-hidden md:h-[600px]">
      <ul className="flex flex-col md:flex-row w-full h-full m-0 p-0 list-none">
        {items.map((item, index) => (
          <li
            key={index}
            className={`
              relative w-full md:w-1/3 h-full min-h-[300px] md:min-h-[600px]
              bg-no-repeat bg-center bg-cover text-white text-center
              transition-all duration-500 ease-in-out
              ${activeIndex === index ? "md:w-3/5" : ""}
              ${activeIndex === null ? "hover:md:w-2/5" : ""}
            `}
            style={{ backgroundImage: `url(${item.bgUrl})` }}
            onClick={() => handleClick(index)}
          >
            {/* Gradient overlay */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-b from-transparent to-black/60
                transition-opacity duration-1000
                "opacity-100"
              `}
            />
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
