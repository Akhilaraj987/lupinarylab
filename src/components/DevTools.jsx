import neokred from "./images/neokred.png";
import next from "./images/next.png";
import tailwindcss from "./images/tailwindcss.png";
import vue from "./images/vue.png";
import html from "./images/html.png";
import bootstrap from "./images/bootstrap.png";
import ts from "./images/ts.png";
import react from "./images/react.png";
import angular from "./images/angular.png";

export default function DevTools() {
  const devToolsList = [
    {
      name: "Angular JS",
      logo: angular,
    },
    {
      name: "Typescript",
      logo: ts,
    },
    {
      name: "React JS",
      logo: react,
    },
    {
      name: "Vue JS",
      logo: vue,
    },
    {
      name: "Html 5",
      logo: html,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindcss,
    },
    {
      name: "Bootstrap",
      logo: bootstrap,
    },
    {
      name: "Next JS",
      logo: next,
    },
    {
      name: "Neokred",
      logo: neokred,
    },
  ];
  return (
    <div className="rounded-[45px] max-w-[453px] max-h-[523px] grid grid-cols-3 devtool-card">
      {devToolsList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-6 m-4"
        >
          <div className="p-5 rounded-[15px] devtool-item">
            <img src={item.logo} alt={item.name} width={68} height={68} />
          </div>
          <p className="mt-4 text-white text-base font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
