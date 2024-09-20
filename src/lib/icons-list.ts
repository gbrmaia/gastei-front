import { Group } from "./types";
import {
  BusIcon,
  Car,
  Droplets,
  Drumstick,
  Fuel,
  House,
  Lightbulb,
  ShoppingCart,
} from "lucide-react";

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
    groupLabel: "Alimentação",
    icons: [
      {
        value: "shopping-cart",
        label: "Mercado",
        icon: ShoppingCart,
      },
      {
        value: "drumstick",
        label: "Fast-food",
        icon: Drumstick,
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
