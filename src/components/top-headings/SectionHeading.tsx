import { Bebas_Neue } from "next/font/google";

export const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const SectionHeading = ({
  title,
  className,
  ...props
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h4
      className={`uppercase text-[3vw] font-semibold py-4 ${className} ${bebasFont.className}`}
      {...props}
    >
      {title}
    </h4>
  );
};
