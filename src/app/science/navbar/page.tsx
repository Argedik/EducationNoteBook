import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const ScienceNavbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarLeft}>
				<Link href="/" className={styles.logo}>
					İlim Meclisi
				</Link>
			</div>
			<div className={styles.navbarRight}>
				<Link href="/" className={styles.navLink}>
					ANASAYFA
				</Link>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>SİTELER</button>
					<div className={styles.dropdownContent}>
						<Link href="/online-course">
							<a>Online Course</a>
						</Link>
						<Link href="/same-home">
							<a>Sames Home</a>
						</Link>
						<Link href="/world-history">
							<a>World of History</a>
						</Link>
					</div>
				</div>
				<Link href="/hakkimizda">
					<a className={styles.navLink}>HAKKIMIZDA</a>
				</Link>
			</div>
		</nav>
	);
};

export default ScienceNavbar;
