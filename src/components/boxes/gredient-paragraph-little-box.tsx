export const GredientPragraphLittleBox = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p
      className={`uppercase bg-gradient-to-t to-[#DA5DA3] from-[#5B428A] p-1 px-6 inline-block rounded-sm font-semibold text-white ${className}`}
    >
      {text}
    </p>
  );
};
