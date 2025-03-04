import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image } from "@chakra-ui/react";
import { SkeletonText } from "@/components/ui/skeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return;

  if (isLoading)
    return <SkeletonText height="8" noOfLines={20} gap="3" variant="shine" />;

  return (
    <List.Root listStyle="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="md"
              overflow="hidden"
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            {genre.name}
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
