import { AppButton } from "@/components/buttons/app-button";
import { TSingleGameOverview } from "@/types/index";
import Image from "next/image";
import { useState } from "react";

export const CustomVerticalTab = ({
  gamesOverviews,
}: {
  gamesOverviews: TSingleGameOverview[];
}) => {
  const [gameId, setGameId] = useState(0);
  console.log({ gameId, game: gamesOverviews[gameId] });
  return (
    <div className="flex items-center">
      <div className="border-e border-gray-200 dark:border-neutral-700 pr-8 transition-all duration-300">
        <nav
          className="flex flex-col space-y-2"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {gamesOverviews.map((game) => (
            <div
              key={game.id}
              className={`sm:hidden lg:block relative inline-block rounded-r-lg ps-6 z-[999] text-white font-semibold rounded-md
               before:content-[''] before:absolute before:inset-0 before:bg-red-700 
               before:opacity-0 before:transition-opacity hover:before:opacity-20 hover:bg-red-600 transition-all duration-300`}
              onClick={() => setGameId(game.id - 1)}
            >
              <Image
                src={game.photo}
                className="game-overview-item !md:max-w-xs sm:rounded-r-lg "
                alt=""
                width={350}
                height={350}
              />
            </div>
          ))}
        </nav>
      </div>

      <div className="ms-8 w-1/2">
        <div className="">
          <div className="max-w-xl px-4 space-y-6 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl transition-all duration-300">
            <p className="text-gray-50 text-4xl font-semibold sm:text-4xl uppercase">
              {gamesOverviews[gameId].name}
            </p>

            {gamesOverviews[gameId].content
              .split("|")
              .map((paragraph, index) => (
                <p key={index} className="text-gray-50 text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

            <div className="text-center">
              <AppButton>
                <a href="">Watch Now</a>
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
