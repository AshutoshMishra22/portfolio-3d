import { useGLTF } from '@react-three/drei';
import React from 'react';
import skyScene from '../assets/3d/sky.glb';
export default function Sky(props) {
	const sky = useGLTF(skyScene);
	return (
		<mesh>
			<primitive object={sky.scene} />
		</mesh>
	);
}
