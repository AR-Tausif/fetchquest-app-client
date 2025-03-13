export const GameItemHorizontalLine = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={`relative w-full my-1 bg-transparent flex items-center px-4 ${className}`}
    >
      <div className="flex space-x-1">
        <div className="w-[0.2px] h-3 bg-white rotate-[-20deg]"></div>
        <div className="w-[0.2px] h-3 bg-white rotate-[-20deg]"></div>
        <div className="w-[0.2px] h-3 bg-white rotate-[-20deg]"></div>
        <div className="w-[0.2px] h-3 bg-white rotate-[-20deg]"></div>
        <div className="w-[0.2px] h-3 bg-white rotate-[-20deg]"></div>
      </div>

      <div className="mx-2 h-2 w-3/4 bg-gradient-to-r from-pink-500 to-purple-600"></div>
    </div>
  );
};
