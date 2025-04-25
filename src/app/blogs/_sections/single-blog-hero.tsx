const dummyImg = "/images/containers-bg/work-station-bg.png";
export const SingleBlogHero = ({
  className,
  placeholderImage = dummyImg,
}: {
  className?: string;
  placeholderImage?: string;
}) => {
  return (
    <div className={className}>
      <img
        className="object-cover mx-auto w-full"
        src={placeholderImage}
        alt="Coffee Recipe Javascript Project"
      />
    </div>
  );
};
