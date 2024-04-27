import { useEffect, useState } from 'react';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '@/lib/firebase';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Button } from '../ui/button';
import Link from 'next/link';

const ArgedikContent = () => {
	const [imageUpload, setImageUpload] = useState<File | null>(null);
	const [imageList, setImageList] = useState<string[]>([]);

	const imageListRef = ref(storage, 'images/');

	const uploadImage = () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				setImageList((prev) => [...prev, url]);
			});
			setImageList((prev) => [...prev]);
		});
	};

	useEffect(() => {
		listAll(imageListRef).then((response) => {
			const urls = response.items.map((item) => getDownloadURL(item));
			Promise.all(urls).then((urls) => {
				setImageList(urls);
			});
		});
	}, [imageListRef]);

	return (
		<div>
			<div className="fjt gap-x-2">
				<Link href="/decoration">
					<Button size="lg" variant="destructive">
						Dekorasyon
					</Button>
				</Link>
				<Button size="sm" variant="outline">
					Blog
				</Button>
				<Button size="default" variant="secondary">
					3d Model üretimi
				</Button>
			</div>
			<div className={styles.content}>
				<div className={styles.container}>
					<div className={styles.item}>deneme1</div>
					<div className={styles.item}>deneme2</div>
					<div className={styles.item}>deneme3</div>
					<div className={styles.item}>deneme4</div>
					<div className={styles.item}>deneme5</div>
					<div className={styles.item}>deneme6</div>
				</div>
				<div className="Firebase">
					<input
						type="file"
						onChange={(event) => {
							if (event.target.files) {
								setImageUpload(event.target.files[0]);
							}
						}}
					/>
					<button onClick={uploadImage}>Resim Yükle</button>
					{imageList.map((url) => {
						return (
							<Image src={url} key={url} alt={url} width={50} height={50} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ArgedikContent;
