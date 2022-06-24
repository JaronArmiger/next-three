import react, { useRef } from 'react';
import { extend, useLoader, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import parisienne from '../assets/Parisienne_Regular.json';
import { TextureLoader } from 'three';

extend({ TextGeometry });

const Text = () => {
  const font = new FontLoader().parse(parisienne);
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.position.x = clock.getElapsedTime();
  })

  return (
  	<mesh ref={myMesh}>
  	  <textGeometry args={
  	  	[
  	  	  'Boba with me??',
  	  	  { font, size: 2, height: 1},
  	  	]
  	  } />
  	  <meshPhysicalMaterial attach='material' color={'gold'} />
  	</mesh>
  );
}

export default Text;