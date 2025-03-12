import {
  Box,
  Grid,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      {useBreakpointValue({
        base: null,
        md: (
          <GridItem area="aside" paddingX={6} paddingY={2}>
            <GenreList
              selectedGenreID={gameQuery.genreID}
              onSelectGenre={(genreID) =>
                setGameQuery({ ...gameQuery, genreID: genreID })
              }
            />
          </GridItem>
        ),
      })}
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={3}>
            <PlatformSelector
              selectedPlatformID={gameQuery.platformID}
              onSelectedPlatformID={(platform) =>
                setGameQuery({ ...gameQuery, platformID: platform?.id })
              }
            />
            <SortSelector
              sort={gameQuery.sortOrder}
              onSelectedSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
