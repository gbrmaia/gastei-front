import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Group } from "@/lib/types";

type IconSelectorProps = {
  iconGroups: Group[];
  selectedIcon: string | null;
  onIconSelect: (icon: string) => void;
};

export default function IconSelector({
  iconGroups,
  selectedIcon,
  onIconSelect,
}: IconSelectorProps) {
  return (
    <Select onValueChange={onIconSelect} value={selectedIcon || ""}>
      <SelectTrigger className="w-40">
        <SelectValue className="w-full" placeholder="Selecione um ícone" />
      </SelectTrigger>
      <SelectContent>
        {iconGroups.map((group) => (
          <SelectGroup key={group.groupLabel}>
            <SelectLabel className="text-xs text-muted-foreground select-none">
              {group.groupLabel}
            </SelectLabel>
            {group.icons.map((icon) => (
              <SelectItem key={icon.value} value={icon.value}>
                <div className="flex items-center">
                  <icon.icon className="mr-2 h-4 w-4" />
                  <span>{icon.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
