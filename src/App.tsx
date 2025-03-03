import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="grey">
        <NavBar />
      </GridItem>
      {useBreakpointValue({
        base: null,
        md: (
          <GridItem area="aside" bg="red">
            Aside
          </GridItem>
        ),
      })}
      <GridItem area="main" bg="gold">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
