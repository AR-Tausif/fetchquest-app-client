export const GetStartingBox = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-[#062047] uppercase text-white px-10 py-4 space-y-4 text-center ${className}`}
    >
      <h5 className="">Getting started</h5>
      <p className="font-bold text-sm">How to start playing</p>
      <div className="flex justify-between items-center text-sm">
        <p className="font-bold">Main</p>
        <p className="font-bold">Vs</p>
        <p className="font-bold">Vitality</p>
      </div>

      <div className="flex justify-between items-center text-xs">
        <p className="font-bold">17:15</p>
        <p className="font-bold">July 30 2025</p>
        <p className="font-bold">Vitality</p>
      </div>
      <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white border border-white py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
        watch tutorial
      </button>
    </div>
  );
};
