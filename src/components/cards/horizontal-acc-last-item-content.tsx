import Image from "next/image";

export const HorizontalAccLastItemContent = () => {
  return (
    <div className="space-y-2 flex flex-col items-center p-10">
      <Image
        src="/images/website-logo.svg"
        alt="website logo"
        className="md:w-[200px] w-10px]"
        width={100}
        height={100}
      />
      <h5 className="font-bold text-4xl">Innovation lights the way</h5>
      <p className="font-semibold text-xl">
        Our party is just getting started.
      </p>
      <p className="text-sm">
        We continue to feed the flame of loving games for a liftime
      </p>
    </div>
  );
};
