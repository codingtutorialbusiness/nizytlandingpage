import Link from "next/link";
import { Separator } from "./ui/separator";
import { Avatar } from "@mui/material";
// import AlphaLogo from ""

export const Channels = () => {
  const channels = [
    {
      logo: "/images/alpha.jpeg",
      name: "Alpha",
      subs: "200,000",
      link: "https://www.youtube.com/@AlphaCentralOfficial",
    },
    {
      logo: "/images/frazer.jpeg",
      name: "Brookes",
      subs: "70,000",
      link: "https://www.youtube.com/FrzerBrookesChannel",
    },
    {
      logo: "/images/dan.jpg",
      name: "Dan Kieft",
      subs: "14,000",
      link: "https://www.youtube.com/Dankieft",
    },
    {
      logo: "/images/joe.jpeg",
      name: "Joe Leech",
      subs: "30,000",
      link: "https://www.youtube.com/Joe_Leech",
    },
  ];

  const style = {
    width: {
      xs: 50,
      sm: 100,
      md: 150,
    },
    height: {
      xs: 50,
      sm: 100,
      md: 150,
    },
  };

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">
        Channels I've Worked With
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div className="flex items-center justify-center mx-auto sm:space-x-4 lg:space-x-8">
        {channels.map((channel, index) => (
          <div key={index} className="mt-10 flex">
            <div className="flex flex-col items-center">
              <Link href={channel.link}>
                <Avatar sx={style} src={channel.logo} alt={channel.name} />
              </Link>
              <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
              <p className="text-lg mt-2">{channel.subs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
