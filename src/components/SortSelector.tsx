import useGameQueryStore from "@/store";
import {
  Button,
  HStack,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const orderBy = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const selectedSort = orderBy.find((item) => item.value === sortOrder);

  return (
    <HStack position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            Order by: {selectedSort?.label || "Relevance"} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent position="absolute" top="50px">
          {orderBy.map((item) => (
            <MenuItem
              onClick={() => setSortOrder(item.value)}
              key={item.label}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </HStack>
  );
};

export default SortSelector;
