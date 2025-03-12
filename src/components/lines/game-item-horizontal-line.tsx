export const GameItemHorizontalLine = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={`relative w-full h-10 bg-transparent flex items-center px-4 ${className}`}
    >
      <div className="flex space-x-2">
        <div className="w-0.5 h-4 bg-white rotate-[-20deg]"></div>
        <div className="w-0.5 h-4 bg-white rotate-[-20deg]"></div>
        <div className="w-0.5 h-4 bg-white rotate-[-20deg]"></div>
        <div className="w-0.5 h-4 bg-white rotate-[-20deg]"></div>
        <div className="w-0.5 h-4 bg-white rotate-[-20deg]"></div>
      </div>

      <div className="ml-4 h-4 w-3/4 bg-gradient-to-r from-pink-500 to-purple-600"></div>
    </div>
  );
};
