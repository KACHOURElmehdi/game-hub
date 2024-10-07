import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <Show above="lg"> { /* pour responsive */}
        <GridItem area="nav" paddingX={5}>
          <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
            Gender
          </Text>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" display="flex" flexDirection="column" gap={2}>
        <HStack spacing={0}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
