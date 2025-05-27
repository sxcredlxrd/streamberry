import { Drama, Film, Heart, Search } from "lucide-react";

export const Links = [
  {
    id: crypto.randomUUID(),
    to: "search",
    IconComponent: Search,
    label: "Поиск",
  },
  {
    id: crypto.randomUUID(),
    to: "/",
    IconComponent: Film,
    label: "Фильмы",
  },
  {
    id: crypto.randomUUID(),
    to: "favorites",
    IconComponent: Heart,
    label: "Избранное",
  },
  {
    id: crypto.randomUUID(),
    to: "genres",
    IconComponent: Drama,
    label: "Жанры",
  },
];
