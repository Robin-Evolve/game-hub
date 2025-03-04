import { Card, CardBody, HStack } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <CardBody>
        <HStack justify="space-between">
          <SkeletonText noOfLines={1} gap="2" />
          <SkeletonCircle size="10" />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
