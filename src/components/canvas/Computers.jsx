import { Suspense, useEffect, useState } from 'react'
import { Canvas, events } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      <hemisphereLight intensity={1.8} groundColor="black"/>
      <pointLight intensity={5} />
      <spotLight position={[-60, 50, 10]} angle={1.2} penumbra={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={isMobile?0.6 : 0.75} position={isMobile?[0, -3, -2]:[0, -3.25, -1.5]} rotation = {[-0.01, -0.2, -0.01]} />
    </mesh>
  )
}

const ComputersCanvas = ()=>{

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(('max-width: 500px'))

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (events)=>{
      setIsMobile(events.matches)
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }

  })

  return(
    
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov : 25}} gl={{preserveDrawingBuffer:true}}>
       <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
            <Computers isMobile={isMobile} />
       </Suspense>

       <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas