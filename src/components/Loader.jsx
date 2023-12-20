import { Html, useProgress } from "@react-three/drei"

const Loader = () => {

  const { progress } = useProgress()

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="font-5 text-[#f1f1f1] font-extrabold  mt-40 ">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader