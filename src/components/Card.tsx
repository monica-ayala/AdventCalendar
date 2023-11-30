import { Link } from "react-router-dom";
import { IDay } from "../types/index.ts";

export interface ICardProps {
  color: "red" | "white";
  day: IDay;
}

const Card = ({ day, color}: ICardProps) => {
  const redImage = new Image();
  redImage.src = `./assets/imgs/red-card.png`;

  const whiteImage = new Image();
  whiteImage.src = `./assets/imgs/white-card.png`;

  return (
    <div className="group h-80 w-58 [perspective:1000px] mb-4">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className={color === 'red' ? `absolute inset-0 h-full w-full rounded-xl bg-[url('https://i.ibb.co/sRh8sDg/red-card.png')] bg-no-repeat bg-cover px-12 text-center` : `absolute inset-0 h-full w-full rounded-xl bg-[url('https://i.ibb.co/XpfgzCj/white-card.png')] bg-no-repeat bg-cover px-12 text-center`}
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1
              className={`text-7xl font-bold ${
                color === "red"
                  ? "text-white"
                  : color === "white"
                  ? "text-primary-red"
                  : ""
              }`}
            >
              {day.id}
            </h1>
          </div>
        </div>
        {day.status === "Locked" ? (
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
            <p className="font-bold">
                Aún no puedes abrir este regalo, se un michi paciente.
              </p>
            </div>
          </div>
        ) : day.status === "Claimed" ? (
          <div className="absolute inset-0 h-full w-full rounded-xl bg-green-800/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="font-bold">
                Ya has obtenido reste regalo, espero te haya gustado.
              </p>
              <Link className="mt-2 p-2 bg-green-600 text-white rounded hover:bg-green-700" to={`/Wordle/${day.id}`}> Abrir </Link>
            </div>
          </div>
        ): day.status === "Open" ? (
            <div className="absolute inset-0 h-full w-full rounded-xl bg-red-950/70 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <span className="font-bold"> {day.name}</span>
                <Link className="mt-2 p-2 bg-red-600 text-white rounded hover:bg-red-700" to={`/OngoingWordle/${day.id}`}> Abrir </Link>
              </div>
            </div>
          ) : (
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-2xl font-bold"></h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
