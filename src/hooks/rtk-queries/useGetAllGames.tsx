"use client";

import { useGetGamesQuery } from "@/redux/api/games.api";
import { IGameCardContent } from "@/types/home-page";
import { demoGames } from "@/utils/demo-data";
import { getLocalDate } from "@/utils/localDate";

export interface IMappedGameSlide {
  id: string;
  posterImg: string;
  gameName: string;
  date: string;
  site: string;
}

export const useGetAllGames = () => {
  const { data, isLoading } = useGetGamesQuery(undefined);
  console.log({afasdf:data});
  const gameSlideData : IGameCardContent[] = data?.data?.data.map((game) => ({
    id: game._id,
    posterImg: game.image || "/images/posters/poster-6.jpg",
    gameName: game.name || "Introductiong check6 extraction dlc",
    date: game?.createdAt ? getLocalDate(game.createdAt) : "N/A",
    site: game?.link,
    description: game?.description,
  })) || demoGames.data.games;

  if (!gameSlideData) return { gameSlide: [], isGamePending: isLoading };
  return { gameSlide: gameSlideData, isGamePending: isLoading };
};
