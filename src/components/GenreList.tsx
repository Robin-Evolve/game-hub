import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Link, Box, Heading } from "@chakra-ui/react";
import { SkeletonText } from "@/components/ui/skeleton";

interface Props {
  onSelectGenre: (genreID: number) => void;
  selectedGenreID?: number;
}

const GenreList = ({ selectedGenreID, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return;

  if (isLoading)
    return <SkeletonText height="8" noOfLines={20} gap="3" variant="shine" />;

  return (
    <Box>
      <Heading as="h2" size="md" paddingY={2}>
        Genres
      </Heading>
      <List.Root listStyle="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="md"
                overflow="hidden"
                objectFit="cover"
                w="32px"
                h="32px"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  onSelectGenre(genre.id);
                }}
                fontWeight={selectedGenreID === genre.id ? "bold" : "normal"}
                variant="plain"
                href="#"
                border="none"
                _focus={{ outline: "none" }}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default GenreList;
