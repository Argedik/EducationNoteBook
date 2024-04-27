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
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: '50%',
							left: '20%',
							transform: 'translate(-50%, -50%)',
						}}
						className="flex gap-x-1"
					>
						<input
							type="radio"
							name="propertyType"
							value="villa"
							id="villaRadio"
							className={style.radio}
						/>
						<label htmlFor="villaRadio">Konut</label>
					</div>
				</Button>
				<Button
					size="decoration"
					variant="decoration"
					style={{
						backgroundImage: 'url(/images/decoration/ofis.webp)',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: '50%',
							left: '20%',
							transform: 'translate(-50%, -50%)',
						}}
						className="flex gap-x-1"
					>
						<input
							type="radio"
							name="propertyType"
							value="office"
							id="officeRadio"
							className={style.radio}
						/>
						<label htmlFor="officeRadio">Ofis</label>
					</div>
				</Button>
				<Button
					size="decoration"
					variant="decoration"
					style={{
						backgroundImage: 'url(/images/decoration/sanayi.jpeg)',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: '50%',
							left: '20%',
							transform: 'translate(-50%, -50%)',
						}}
						className="flex gap-x-1"
					>
						<input
							type="radio"
							name="propertyType"
							value="industry"
							id="industryRadio"
							className={style.radio}
						/>
						<label htmlFor="industryRadio">Sanayi</label>
					</div>
				</Button>
			</div>
		</>
	);
};

export default Decoration;
