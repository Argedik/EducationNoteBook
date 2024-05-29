import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';

const ScienceNavbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarLeft}></div>
			<div className={styles.navbarRight}>
				<Link href="/" className={styles.navLink}>
					ANASAYFA
				</Link>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>SİTELER</button>
					<div className={styles.dropdownContent}>
						<Link href="/online-course">Online Course</Link>
						<Link href="/same-home">Sames Home</Link>
						<Link href="/world-history">World of History</Link>
					</div>
				</div>
				<Link href="/hakkimizda" className={styles.navLink}>
					HAKKIMIZDA
				</Link>
			</div>
		</nav>
	);
};

export default ScienceNavbar;
