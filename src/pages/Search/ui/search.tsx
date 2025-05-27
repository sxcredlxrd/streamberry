import { SearchInput } from "@/features";
import { useEffect, useState } from "react";
import { useGetFilmsByNameQuery } from "@/features/film/api";
import { FilmItem, type FilmItemProps } from "@/shared/ui/film-item";
import { Loader } from "@/shared/ui";

function Search() {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(handler);
  }, [query]);

  const { data, isLoading } = useGetFilmsByNameQuery(debouncedQuery, {
    skip: !debouncedQuery,
  });

  const hasResults = data?.docs?.length > 0;

  return (
    <div className="flex flex-col">
      <div className="px-[20px] py-[20px]">
        <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="flex flex-wrap justify-between gap-[10px] px-[40px] py-[20px]">
        {!debouncedQuery ? (
          <p className="w-full text-center">Вы ещё ничего не искали</p>
        ) : isLoading ? (
          <Loader />
        ) : hasResults ? (
          data!.docs.map((movie: FilmItemProps) => (
            <FilmItem key={movie.id} {...movie} />
          ))
        ) : (
          <p className="w-full text-center">Ничего не найдено</p>
        )}
      </div>
    </div>
  );
}

export default Search;
