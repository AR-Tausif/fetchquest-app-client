const defaultBg = "/images/blog-photos/alone-man.png";
export const BlogCard = ({
  className = "",
}: {
  className?: string;
  blogBg?: string;
}) => {
  return (
    <div
      className={`h-[342px] flex flex-col-reverse text-white bg-[url(/images/blog-photos/alone-man.png)] bg-cover bg-center ${className} relative after:content-[''] after:absolute after:bg-red-500 after:top-0 after:bottom-0 after:right-0 after:w-10 after:h-10 `}
    >
      <div className="space-y-2 p-10">
        <p>The Official Trailer</p>
        <h3 className="text-4xl">Check6: Newcomers</h3>
        <p className="uppercase underline underline-offset-4 text-xl font-bold">
          Watch now
        </p>
      </div>
    </div>
  );
};
