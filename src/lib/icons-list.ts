import { Group } from "./types";
import { BusIcon, Car, Droplets, Fuel, House, Lightbulb } from "lucide-react";

export const iconsExpenseForSelectorList: Group[] = [
  {
    groupLabel: "Moradia",
    icons: [
      {
        value: "house",
        label: "Casa",
        icon: House,
      },
      {
        value: "lightbulb",
        label: "Luz",
        icon: Lightbulb,
      },
      {
        value: "droplets",
        label: "Água",
        icon: Droplets,
      },
    ],
  },
  {
    groupLabel: "Transporte",
    icons: [
      {
        value: "car",
        label: "Carro",
        icon: Car,
      },
      {
        value: "fuel",
        label: "Combustível",
        icon: Fuel,
      },
      {
        value: "bus",
        label: "Ônibus",
        icon: BusIcon,
      },
    ],
  },
];
