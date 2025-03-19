import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [expendable, setExpendable] = useState(false);
  const limited = 300;

  if (!children) return null;

  if (children.length < limited) return <Text>{children}</Text>;

  const summary = expendable
    ? children
    : children.substring(0, limited) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft={1}
        onClick={() => setExpendable(!expendable)}
      >
        {expendable ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpendableText;
