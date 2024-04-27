import { Button } from '@/components/ui/button';
import React from 'react';
import style from './styles.module.scss';

const Decoration = () => {
	return (
		<>
			<div className="min-h-screen faj flex-col gap-8">
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
					style={{
						backgroundImage: 'url(/images/decoration/Villa.jpg)',
						opacity: '0.5',
					}}
				>
					Ev
				</Button>
				<Button
					size="decoration"
					variant="decoration"
					style={{
						backgroundImage: 'url(/images/decoration/ofis.webp)',
						opacity: '0.5',
					}}
				>
					Ofis
				</Button>
				<Button
					size="decoration"
					variant="decoration"
					style={{
						backgroundImage: 'url(/images/decoration/sanayi.jpeg)',
						opacity: '0.5',
					}}
				>
					Sanayi
				</Button>
			</div>
		</>
	);
};

export default Decoration;
