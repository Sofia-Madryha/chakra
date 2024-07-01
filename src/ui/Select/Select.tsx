import { Select as SelectChakra } from "@chakra-ui/react";
import { SelectProps } from "./Select.types";

const Select = ({ items, variant }: SelectProps) => {
  return (
    <div>
      <SelectChakra variant={variant}>
        {items.map((item) => {
          return <option>{item}</option>;
        })}
      </SelectChakra>
    </div>
  );
};

export default Select;
