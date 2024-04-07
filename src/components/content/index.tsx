import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

type Props = {
	images: string[];
};

export const getStaticProps: GetStaticProps = async () => {
	const imagesDirectory = path.join(process.cwd(), 'public/images');
	const filenames: string[] = fs.readdirSync(imagesDirectory);
	const images = filenames.map((name) => `/images/${name}`);

	return {
		props: {
			images,
		},
	};
};

const ArgedikContent: React.FC<Props> = ({ images }) => {
	return (
		<div style={{ maxWidth: '1170px', margin: 'auto' }}>
			{images.map((image, index) => (
				<div
					key={index}
					style={{
						marginBottom: '10px',
						float: 'left',
						width: '33.3333%',
						padding: '5px',
					}}
				>
					{/* Next.js'in Image bileşeni kullanılarak resim optimizasyonu sağlanır */}
					<Image src={image} width={500} height={300} alt={`Image ${index}`} />
				</div>
			))}
		</div>
	);
};

export default ArgedikContent;
