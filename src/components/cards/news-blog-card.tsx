import { GredientPragraphLittleBox } from "../boxes";
import { SectionHeading } from "../top-headings/SectionHeading";

export const NewsBlogCard = () => {
  return (
    <div className="bg-black flex flex-col justify-between w-[450px] h-[518px] bg-[url(https://s3-alpha-sig.figma.com/img/19f0/15f2/2fcfebdf54403d18f95ff2723def90b8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kSE1kvtIjpkU9LMotKM~vmuagFyDvOm8ubE-OP35KxfcNr~sERR1OoDJlJo4n~iTWjK4lki5Jd7VQtEJz5Iw8MJ03Rr6ODnVkLr8lsrfLRDN3AGzKQ97-ms9MGM-ZVLn~3EDmaOqXuWHkVgUcmx~hIgaNcsZELh5-JtBJQt3Bdyz5fPIDWjSHh5Q8FkO9PD~uu3JZRw5dXfc3zSzlaMRBv3xh5NZwGBOmmiXTranNFkvrMC3F2X8ONiaVykdj4Q2EJUqBkOkBIxfth1WBmhnsz4g15jhKWO1bzWlS~d8KUAxs6M4vRJvcsp4MZ4ymuCdPjFaxTJLJ5d4wRegn5u08Q__)] bg-no-repeat bg-cover bg-center">
      <div className="p-4">
        <GredientPragraphLittleBox text="Fetch quest games" />
      </div>
      <div className="p-4">
        <p className="text-white">13 March 2025</p>
        <SectionHeading
          title="April 21, 2025 The Next Year of Magic from Fetch Quest Presents"
          className="text-[4vmin] text-white leading-10"
        />
      </div>
    </div>
  );
};
