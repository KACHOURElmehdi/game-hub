import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "nav main" `,
      }}
    >
      <GridItem area="header" >
        <Header />
      </GridItem>
      <Show above="lg"> { /* pour responsive */}
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
