import useData from "./useData";

export interface Platform{
  id : number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>('/Platforms/lists/parents/');

export default usePlatforms