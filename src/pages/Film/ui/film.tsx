import { Link, useParams } from "react-router";
import { useGetFilmByIdQuery } from "@/features/film/api";
import { Loader, UIButton } from "@/shared/ui";
import { Poster } from "@/shared/assets";

function Film() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetFilmByIdQuery(Number(id));
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-between px-[40px] py-[20px] gap-[40px]">
          <div className="flex h-[660px] gap-[20px]">
            <div>
              <img
                className="w-[430px] h-full rounded-[10px]"
                src={data.poster?.url || Poster}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start">
              <div>
                <h1 className="text-[40px] font-bold">{data.name}</h1>
              </div>
              <div className="flex flex-col h-full justify-between gap-[15px]">
                <p className="text-n-2 text-[14px]">
                  {data.alternativeName}&nbsp;{data.ageRating}+
                </p>
                <p className="whitespace-break-spaces">
                  {data.shortDescription}
                </p>
                <h1 className="text-[24px] font-bold">
                  О {data.isSeries ? "сериале" : "фильме"}
                </h1>
                <ul className="flex flex-col gap-[10px]">
                  <li>Год производства: {data.year}г</li>
                  <li>
                    Страна:&nbsp;
                    {data.countries
                      ?.map((country: { name: string[] }) => country.name)
                      .join(", ")}
                  </li>
                  <li>
                    Жанр:&nbsp;
                    {data.genres
                      ?.map((genre: { name: string[] }) => genre.name)
                      .join(", ")}
                  </li>
                  {data.slogan && (
                    <li>
                      Слоган:{" "}
                      <span className="text-n-2 font-thin">
                        «{data.slogan}»
                      </span>
                    </li>
                  )}
                  <li>
                    Режиссер:{" "}
                    {data.persons
                      .filter(
                        (person: { enProfession: string }) =>
                          person.enProfession === "director",
                      )
                      .map((person: { name: string }) => (
                        <>{person.name}&nbsp;</>
                      ))}
                  </li>
                  <li>
                    Сценарий:{" "}
                    {data.persons
                      .filter(
                        (person: { enProfession: string }) =>
                          person.enProfession === "writer",
                      )
                      .map((person: { name: string }) => (
                        <>{person.name}&nbsp;</>
                      ))}
                  </li>
                  <li>
                    Продюсеры:&nbsp;
                    {data.persons
                      .filter(
                        (person: { enProfession: string }) =>
                          person.enProfession === "producer",
                      )
                      .map((person: { name: string }) => (
                        <>{person.name}&nbsp;</>
                      ))}
                  </li>
                  <li>
                    Композитор:&nbsp;
                    {data.persons
                      .filter(
                        (person: { enProfession: string }) =>
                          person.enProfession === "composer",
                      )
                      .map((person: { name: string }) => (
                        <>{person.name}&nbsp;</>
                      ))}
                  </li>
                  {data.budget && <li>Бюджет:&nbsp;${data.budget.value}</li>}
                  {data.fees && (
                    <li>Сборы в мире:&nbsp;${data.fees.world.value}</li>
                  )}
                </ul>
                <Link to={`/play/${id}`}>
                  <UIButton className="self-start">
                    Смотреть {data.isSeries ? "сериал" : "фильм"}
                  </UIButton>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-col gap-[5px]">
                <h1 className="text-[30px] font-bold px-[15px] w-fit py-[10px] rounded-[5px] bg-color-5">
                  {data.rating?.kp.toFixed(1)}
                </h1>
                <p>{data.votes?.kp}&nbsp;оценки</p>
              </div>
            </div>
          </div>
          <div className="w-[1200px] flex flex-col gap-[15px]">
            <h1 className="text-[30px] font-bold">Описание</h1>
            <p className="whitespace-break-spaces">{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Film;
