import { Player } from "@/features";
import { useParams } from "react-router";
import { AuthBackground } from "@/shared/assets";

function PlayerFilm() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <img
        className="brightness-30 bg-cover pointer-events-none absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src={AuthBackground}
        alt="Layout background"
      />
      <div className="w-[800px] z-2 h-auto px-[20px] py-[15px] bg-black rounded-[10px]">
        <Player kpId={id} />
      </div>
    </div>
  );
}

export default PlayerFilm;
