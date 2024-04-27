import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.footercol}>
						<h4>İşletme</h4>
						<ul>
							<li>
								<a href="#">Hakkımızda</a>
							</li>
							<li>
								<a href="#">Hizmetlerimiz</a>
							</li>
							<li>
								<a href="#">Gizlilik Politikası</a>
							</li>
							<li>
								<a href="#">Ortaklık Programı</a>
							</li>
						</ul>
					</div>
					<div className={styles.footercol}>
						<h4>Yardım</h4>
						<ul>
							<li>
								<a href="#">SSS</a>
							</li>
							<li>
								<a href="#">Özel Üyelikler</a>
							</li>
							<li>
								<a href="#">Şikayetler</a>
							</li>
							<li>
								<a href="#">Takip Numarası</a>
							</li>
							<li>
								<a href="#">Ödeme Seçenekleri</a>
							</li>
						</ul>
					</div>
					<div className={styles.footercol}>
						<h4>Online Alışveriş</h4>
						<ul>
							<li>
								<a href="#">Özel Üyelik</a>
							</li>
							<li>
								<a href="#">Arkadaş Daveti</a>
							</li>
							<li>
								<a href="#">Ek Hizmet</a>
							</li>
							<li>
								<a href="#">Özel Hizmet</a>
							</li>
						</ul>
					</div>
					<div className={styles.footercol}>
						<h4>Sosyal Medya Hesaplarımız</h4>
						<div className="social-links">
							<a href="#" className="mx-2">
								<FontAwesomeIcon icon={faLinkedin} size="2x" color="grey" />
							</a>
							<a href="#" className="mr-2">
								<FontAwesomeIcon icon={faInstagram} size="2x" color="grey" />
							</a>
							<a href="#" className="mr-2">
								<FontAwesomeIcon icon={faFacebook} size="2x" color="grey" />
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faTwitter} size="2x" color="grey" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
