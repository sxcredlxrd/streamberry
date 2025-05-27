import { Link } from "react-router";
import { Poster } from "@/shared/assets";

type Poster = {
  url: string;
  previewUrl: string;
};

type Rating = {
  kp: number;
  filmCritics: number;
  imdb: number;
  russianCritics: number;
};

export type FilmItemProps = {
  id: number;
  name: string;
  alternativeName?: string;
  year?: number;
  description?: string;
  ageRating?: number;
  poster?: Poster;
  rating?: Rating;
};

function FilmItem({ id, name, poster, rating }: FilmItemProps) {
  return (
    <div className="w-[300px] flex flex-col gap-[10px]">
      <Link className="relative flex flex-col " to={`/film/${id}`}>
        <div className="absolute px-[10px] py-[5px] rounded-[5px] bg-color-5 top-[2px] right-[2px]">
          {rating?.kp.toFixed(1)}
        </div>
        <img
          className="w-full h-auto  rounded-[5px]"
          src={poster?.url || Poster}
          alt={`Постер: ${name}`}
        />
      </Link>
      <h1>{name}</h1>
    </div>
  );
}

export default FilmItem;
