import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Island from '../model/Island';
import Loader from '../component/Loader';
import Sky from './../model/Sky';
import Bird from './../model/Bird';
import Plane from './../model/Plane';
import HomeInfo from '../component/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(null);
	// audio player
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);
	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.4;
	audioRef.current.loop = true;
	useEffect(() => {
		if (isPlayingMusic) {
			audioRef.current.play();
		}
		return () => {
			audioRef.current.pause();
		};
	}, [isPlayingMusic]);

	const adjustIslandForScreenSize = () => {
		let screenScale = null,
			screenPosition = [0, -6.5, -43],
			rotation = [0.1, 4.7, 0];
		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
			screenPosition = [0, -6.5, -43];
		} else {
			screenScale = [1, 1, 1];
			screenPosition = [0, -6.5, -43];
		}
		return [screenScale, screenPosition, rotation];
	};
	const [islandScale, islandPosition, islandRotation] =
		adjustIslandForScreenSize();

	const adjustBiplaneForScreenSize = () => {
		let screenScale, screenPosition;

		// If screen width is less than 768px, adjust the scale and position
		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [0, -1.5, 0];
		} else {
			screenScale = [3, 3, 3];
			screenPosition = [0, -4, -4];
		}

		return [screenScale, screenPosition];
	};
	const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

	return (
		<section className='w-full h-screen relative'>
			<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Canvas
				className={`w-full h-screen bg-transparent ${
					isRotating ? 'cursor-grabbing' : 'cursor-grab'
				}`}
				camera={{ near: 0.1, far: 1000 }}
			>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 1, 1]} intensity={2} />
					<ambientLight intensity={0.5} />
					<hemisphereLight
						skyColor='#b1e1ff'
						groundColor='#000000'
						intensity={1}
					/>
					<Sky isRotating={isRotating} />
					<Bird />
					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
						isRotating={isRotating}
						setCurrentStage={setCurrentStage}
						setIsRotating={setIsRotating}
					/>
					<Plane
						isRotating={isRotating}
						position={biplanePosition}
						rotation={[0, 20.1, 0]}
						scale={biplaneScale}
					/>
				</Suspense>
			</Canvas>
			<div className='absolute bottom-2 left-2'>
				<img
					src={isPlayingMusic ? soundon : soundoff}
					alt='sound'
					className='w-10 h-10 cursor-pointer object-contains'
					onClick={() => setIsPlayingMusic(!isPlayingMusic)}
				/>
			</div>
		</section>
	);
};

export default Home;
