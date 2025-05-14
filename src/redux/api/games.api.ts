import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";
import { IGameResponse } from "@/types/redux/games";
import { demoGames } from "@/utils/demo-data";

const gamesApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query<IResponse<IGameResponse>, undefined>({
      query: () => ({
        url: "/games",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
      transformErrorResponse: () => demoGames,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
