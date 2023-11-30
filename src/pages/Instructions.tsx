import Wrapper from "../containers/Wrapper";

type Props = {};

export default function Instructions({}: Props) {
  return (
    <Wrapper>
      <>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="text-3xl font-bold mb-10">Instrucciones</div>

        <ol className="text-xl">
          <li className=" mb-4">
            <span className="font-bold">No vale intentar saber que regalos son los que siguen. El punto de
            un calendario de adviento es no saber. Eso incluye pero no está
            limitado a:</span>
            <ol className="list-disc pl-6">
              <li>Hackear la base de datos del sitio</li>
              <li>Husmear en mi teléfono</li>
              <li>Chantaje emocional</li>
              <li>Preguntar a personas que puedan saber</li>
            </ol>
          </li>
          <li className="font-bold mb-4">
            Tener cuidado con la página, esta chiquita es un michi. No necesita
            malos usuarios que quieran probar los edge cases, por favor
          </li>
          <li className="font-bold mb-4">
            Cada día se desbloquea una carta, un regalo y su jueguito de
            wordle.
          </li>
          <li className="font-bold">
            Diviértete, siéntete en espíritu navideño y dame besitos de
            agradecimiento.
          </li>
        </ol>
        <span className="text-red-600 mt-10 italics font-bold">Con amor, Moni ♡</span>
        <span className="mt-10 italic ml-30">PD: Disculpa el estilo de esta página</span>
      </div>
      </>
    </Wrapper>
  );
}
