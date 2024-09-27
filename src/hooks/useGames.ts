import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => {
// Ensure a stable dependency array by passing an empty array when no genre is selected
const genreId = selectedGenre ? selectedGenre.id : null;
  return useData<Game>(
    '/games',
    { params: { genres: genreId } }, 
    selectedGenre ? [genreId] : []  // Add a condition to check if selectedGenre is null before accessing id.
  );
};


export default useGames; 