import { Button } from '@/components/ui/button';
import React from 'react';

const Decoration = () => {
	return (
		<>
			<div className="min-h-screen faj">
				{/* <Button
					size="decoration"
					variant="decoration"
					style={{ backgroundImage: 'url(/images/decoration/ev.jpg)' }}
				>
					Ev
				</Button> */}
				<Button
					size="decoration"
					variant="decoration"
					style={{ backgroundImage: 'url(/images/decoration/Villa.jpg)' }}
				>
					Ev
				</Button>
				<Button
					size="decoration"
					variant="decoration"
					style={{ backgroundImage: 'url(/images/decoration/ofis.webp)' }}
				>
					Ofis
				</Button>
			</div>
		</>
	);
};

export default Decoration;
