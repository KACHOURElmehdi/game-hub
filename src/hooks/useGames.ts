import useData from "./useData";
import { GameQuery } from './../App';

export interface Platform{
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number; // cSpell:ignore metacritic
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    '/games',
    { 
      params: { 
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id 
      }
    }, 
    [gameQuery]
  );
};


export default useGames; 