import Image from 'next/image';
import React from 'react';

const HomePage = () => {
	return (
		<div>
			<Image
				src="/images/science/homepage/1.png"
				alt="Oyun"
				width={200}
				height={200}
			/>
		</div>
	);
};

export default HomePage;
