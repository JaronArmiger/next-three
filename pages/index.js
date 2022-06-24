
import css from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import Box from '../components/box';
import OrbitControls from '../components/orbitControls';
import Floor from '../components/floor';
import LightBulb from '../components/lightBulb';
import Draggable from '../components/draggable.js';
import Text from '../components/text.js';
import { Suspense } from 'react';



export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [0, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
        <Text position={[0, 0, 0]}/>
        <Box />

        {/*<Draggable>
                  <Suspense fallback={null}>
                    <Box rotateX={3} rotateY={0.2} rotateZ={0.2}/>
                  </Suspense>
                </Draggable>
                <OrbitControls />
                <Floor position={[0, -1, 0]} />*/}
      </Canvas>
    </div>
  )
}
