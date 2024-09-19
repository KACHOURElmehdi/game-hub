import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController ;

    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      .then((result) => {
        setGames(result.data.results)
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError ) return;
        setError(err.message);
        setLoading(false);
      });
      

      return () => controller.abort();
  }, []);

  return {games, error, isLoading}
}

export default useGames; 