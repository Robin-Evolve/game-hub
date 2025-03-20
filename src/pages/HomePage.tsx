import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import {
  Grid,
  GridItem,
  useBreakpointValue,
  Box,
  HStack,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      {useBreakpointValue({
        base: null,
        md: (
          <GridItem
            area="aside"
            paddingX={6}
            paddingY={2}
            className="genre-list"
          >
            <GenreList />
          </GridItem>
        ),
      })}
      <GridItem area="main" className="game-grid">
        <Box paddingLeft={5}>
          <GameHeading />
          <HStack gap={3}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
