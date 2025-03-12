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
      className={`uppercase text-[4vw] font-semibold py-4 ${className}`}
      {...props}
    >
      {title}
    </h4>
  );
};
