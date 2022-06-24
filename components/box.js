import react, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
 

const Box = (props) => {
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
  })

  const texture = useLoader(TextureLoader, "quinlan.jpg");

  return (
  	<mesh {...props} ref={myMesh} receiveShadow={true} castShadow={true}>
  	  <boxBufferGeometry />
  	  <meshPhysicalMaterial map={texture} color={"white"} />
  	</mesh>
  );
}

export default Box;