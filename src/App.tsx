import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
// import { Platform } from './hooks/useGames';

const App = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main" display="flex" flexDirection="column" gap={2}>
        <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform) }/>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
