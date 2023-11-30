import { IDay } from "../types/index";

type Props = {
    day: IDay;
}

const Letter = ({day}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-20">
        <div className="font-bold text-red-800 text-3xl mb-5"> Querido Antonio, </div>
        <div className="text-2xl font-cursive">{day.letterDescription} <span className="font-bold"> Con amor, Moni ♡ </span></div>
    </div>
  )
}

export default Letter