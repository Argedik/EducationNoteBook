'use client';

import ArgedikContent from '@/components/content';
import { Button } from '@/components/ui/button';
import { Suspense, useEffect, useState } from 'react';
import Car3d from '@/components/models3d/car';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader } from '@react-three/drei';

export default function Page() {
	const [headerHeight, setHeaderHeight] = useState(0);
	console.log('test');
	useEffect(() => {
		const updateHeaderHeight = () => {
			const navElement = document.querySelector('header nav') as HTMLElement;
			console.log(navElement);
			if (navElement) {
				setHeaderHeight(navElement.offsetHeight);
			}
		};

		// Update header height on mount and resize
		updateHeaderHeight();
		window.addEventListener('resize', updateHeaderHeight);

		// Cleanup the event listener on component unmount
		return () => window.removeEventListener('resize', updateHeaderHeight);
	}, []);

	const adjustCarForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [-15, -2.5, -43];
		let rotation = [0.3, 4.5, 0];

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
		} else {
			screenScale = [0.07, 0.06, 0.07];
		}
		return [screenScale, screenPosition, rotation];
	};

	const [carScale, carPosition, carRotation] = adjustCarForScreenSize();

	return (
		<main style={{ paddingTop: `${headerHeight}px` }}>
			{' '}
			<section className="w-full h-96 relative">
				<Canvas
					className="w-full h-screen bg-transparent"
					camera={{ near: 0.1, far: 1000 }}
				>
					<Suspense fallback={<Loader />}></Suspense>
					<directionalLight intensity={3} position={[0, 3, 2]} />
					<ambientLight />
					<pointLight />
					<spotLight />
					<hemisphereLight />
					<Environment preset="city" />

					<Car3d
						position={carPosition}
						scale={carScale}
						rotation={carRotation}
					/>
				</Canvas>
			</section>
			<div className="text-green-500 space">testdeneme</div>
			<Button size="lg">Deneme</Button>
			<ArgedikContent />
		</main>
	);
}
