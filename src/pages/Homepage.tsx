import Curtain from "../components/Curtain"
import Catalogue from "./Catalogue.tsx"

type Props = {}

export default function Homepage({}: Props) {
  return (
    <>
        <Curtain>
          <Catalogue />
        </Curtain>
    </>
  )
}