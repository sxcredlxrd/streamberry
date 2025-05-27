import { useEffect, useState } from "react";
import { useGetFilmsByMovieQuery } from "@/features/film/api";
import { FilmItem, Loader } from "@/shared/ui";
import type { FilmItemProps } from "@/shared/ui/film-item";
import { useInfiniteScroll } from "@/shared/hooks";

function Home() {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState<FilmItemProps[]>([]);
  const { data, isFetching } = useGetFilmsByMovieQuery({
    page,
    limit: 20,
    notNullFields: ["name"],
    type: [""],
    lists: ["top250"],
    sortField: ["rating.kp"],
    sortType: ["-1"],
  });

  useEffect(() => {
    if (data?.docs) {
      setFilms((prev) => [...prev, ...data.docs]);
    }
  }, [data]);

  const loaderRef = useInfiniteScroll(() => {
    setPage((prev) => prev + 1);
  }, isFetching);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-[10px] px-[40px] py-[20px]">
        {films.map((movie) => (
          <FilmItem key={movie.id} {...movie} />
        ))}
      </div>

      <div ref={loaderRef}>{isFetching && <Loader />}</div>
    </>
  );
}

export default Home;
