import Image from 'next/image';
import React from 'react';

const HomePage = () => {
	return (
		<div className="flex w-full h-screen">
			<div className="relative flex-1 h-full">
				<Image
					src="/images/science/homepage/1.png"
					alt="Oyun"
					layout="fill" // resmin div'e sığdırılması
					objectFit="cover"
				/>
			</div>
			<div className="relative flex-1 h-full">
				<Image
					src="/images/science/homepage/2.png"
					alt="Oyun"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="relative flex-1 h-full">
				<Image
					src="/images/science/homepage/3.png"
					alt="Oyun"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
};

export default HomePage;
