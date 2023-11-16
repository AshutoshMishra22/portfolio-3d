import { useGLTF } from '@react-three/drei';
import React from 'react';
import planeScene from '../assets/3d/plane.glb';
export default function Plane({ isRotating, ...props }) {
	const { scene, animations } = useGLTF(planeScene);
	return (
		<mesh {...props}>
			<primitive object={scene} />
		</mesh>
	);
}
