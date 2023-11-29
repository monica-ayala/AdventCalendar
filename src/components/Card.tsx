import { IDay } from "../types/index.ts";
import ModalCard from "./ModalCard.tsx";
import { useState } from 'react';

export interface ICardProps {
  color: "red" | "white";
  day: IDay;
}

const Card = ({ day, color }: ICardProps) => {
  const redImage = new Image();
  redImage.src = `./assets/imgs/red-card.png`;

  const whiteImage = new Image();
  whiteImage.src = `./assets/imgs/white-card.png`;
  const [openModal, setOpenModal] = useState<Boolean>(false);

  return (
    <div className="group h-80 w-58 [perspective:1000px] mb-4">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className={`absolute inset-0 h-full w-full rounded-xl bg-[url('./assets/imgs/${color}-card.png')] bg-no-repeat bg-cover px-12 text-center`}
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
              <h1 className="text-2xl font-bold">No disponible</h1>
            </div>
          </div>
        ) : day.status === "Claimed" ? (
          <div onClick={() => setOpenModal(true)} className="absolute inset-0 h-full w-full rounded-xl bg-green-800/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Abierto</h1>
              <p className="text-lg">
                Ya has descubierto que regalo es. Psst . . . era{" "}
                {day.letterDescription}
              </p>
            </div>
          </div>
        ): day.status === "Open" ? (
            <div onClick={() => setOpenModal(true)} className="absolute inset-0 h-full w-full rounded-xl bg-red-950/70 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-lg">
                 Pista: {day.letterDescription}
                </p>
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
