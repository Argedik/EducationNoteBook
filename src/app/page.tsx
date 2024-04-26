'use client';

import ArgedikContent from '@/components/content';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

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

	return (
		<main style={{ paddingTop: `${headerHeight}px` }}>
			<div className="text-green-500 space">testdeneme</div>
			<Button size="lg">Deneme</Button>
			<ArgedikContent />
		</main>
	);
}
