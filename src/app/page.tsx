'use client';

import ArgedikContent from '@/components/content';
import { useEffect, useState } from 'react';

export default function Page() {
	const [headerHeight, setHeaderHeight] = useState(0);
	console.log('test');
	useEffect(() => {
		// Function to update the variable with the current header height
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
	const deneme = () => {
		console.log();
	};
	return (
		<main style={{ paddingTop: `${headerHeight}px` }}>
			<ArgedikContent />
		</main>
	);
}
