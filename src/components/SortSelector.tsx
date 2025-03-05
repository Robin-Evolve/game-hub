import {
  Button,
  HStack,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSort: (sort: string) => void;
  sort?: string;
}

const SortSelector = ({ onSelectedSort, sort }: Props) => {
  const orderBy = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSort = orderBy.find((item) => item.value === sort);

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
              onClick={() => onSelectedSort(item.value)}
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
