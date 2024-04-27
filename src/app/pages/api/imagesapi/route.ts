// import type { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// 	const imagesDirectory = path.join(process.cwd(), 'public/images');
// 	fs.readdir(imagesDirectory, (err, files) => {
// 		if (err) {
// 			res.status(500).json({ message: 'Unable to read images directory' });
// 			return;
// 		}
// 		console.log('Files:', files); // Dosya listesini logla

// 		const imagePaths = files.map((file) => `/images/${file}`);

// 		console.log('Image Paths:', imagePaths);
// 		res.status(200).json(imagePaths);
// 	});
// }

// import type { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// 	console.log('testttt');

// 	res.status(200).json({ message: 'testttt' });
// }

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// if (req.method === 'GET') {
	// 	console.log('object');
	// 	// Process a POST request
	// } else {
	// 	// Handle any other HTTP method
	// }
}
