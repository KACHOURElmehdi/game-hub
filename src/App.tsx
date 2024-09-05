import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main" `,
      }}
    >
      <GridItem area="header" bg="blue.500">
        header
      </GridItem>
      <Show above="lg">
        <GridItem area="nav" bg="red.500">
          nav
        </GridItem>
      </Show>
      <GridItem area="main" bg="yellow.500">
        main
      </GridItem>
    </Grid>
  );
};

export default App;
