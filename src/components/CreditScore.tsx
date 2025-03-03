import { Badge } from "@chakra-ui/react";

interface Pros {
  score: number;
}

const CreditScore = ({ score }: Pros) => {
  const color = score > 90 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX="3" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CreditScore;
