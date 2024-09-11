import Youtube from "react-youtube";
import { Separator } from "./ui/separator";

export const EditedShorts = () => {
  const videoOption = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
    height: "480",
    width: "270",
    className: "rounded-xl",
  };
  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">
        Shorts I&apos;ve Created
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>

      <div className="flex justify-center">
        <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          <Youtube opts={videoOption} videoId="4ef7vcZbvUA" />
          <Youtube opts={videoOption} videoId="grLWfY4OK7c" />
          <Youtube opts={videoOption} videoId="0MFbc08_Y5g" />
          <Youtube opts={videoOption} videoId="ZgW-9H_rVrc" />
        </div>
      </div>
    </div>
  );
};
