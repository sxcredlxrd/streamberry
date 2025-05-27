import { useEffect, useRef } from "react";

export type PlayerProps = {
  kpId?: string;
};

function Player({ kpId }: PlayerProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window as any).kbox(containerRef.current, {
          search: { kinopoisk: kpId },
          menu: {
            enable: false,
          },
          notFoundMessage: "Видео не найдено.",
          players: {
            alloha: {
              enable: true,
              position: 1,
            },
          },
        });
      }
    };

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        console.error(e);
      }
    };
  }, [kpId]);

  return <div ref={containerRef} className="kinobox_player"></div>;
}

export default Player;
