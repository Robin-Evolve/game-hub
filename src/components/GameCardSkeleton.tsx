import { Card, CardBody, HStack } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton
        width="330px"
        height="200px"
        borderRadius={10}
        overflow="hidden"
      >
        <CardBody>
          <SkeletonText noOfLines={2} gap="4" />
          <HStack>
            <SkeletonText noOfLines={2} />
            <SkeletonCircle size="10" />
          </HStack>
        </CardBody>
      </Skeleton>
    </Card.Root>
  );
};

export default GameCardSkeleton;
