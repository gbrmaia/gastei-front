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
};

export default function IconSelector({ iconGroups }: IconSelectorProps) {
    const [selectedIcon, setSelectedIcon] = React.useState("");

    return (
        <Select onValueChange={setSelectedIcon} value={selectedIcon}>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selecione um ícone" />
            </SelectTrigger>
            <SelectContent>
                {iconGroups.map((group) => (
                    <SelectGroup key={group.groupLabel}>
                        <SelectLabel className="text-xs text-muted-foreground">
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
