import React from "react";
import { Select, SelectItem, Avatar, Chip } from "@nextui-org/react";
import { intereses } from "../../data/data";

export default function SelectChip() {

  return (
    <Select
      items={intereses}
      isMultiline
      label="Profesion:"
      selectionMode="multiple"
      renderValue={(selectedItems) => {
        return (
          <div className="flex flex-wrap gap-2">
            {selectedItems.map((item) => (
              <Chip key={item.key}>{item.data.name}</Chip>
            ))}
          </div>
        );
      }}

    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <span className="text-small">{user.name}</span>
        </SelectItem>
      )}
    </Select>
  );
}
