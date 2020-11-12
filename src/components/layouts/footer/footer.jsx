import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DAN_WP from '../../assets/DAN_WP.pdf';
import logo from '../../assets/images/white-logo.svg';
import TwitterIcon from '../../assets/images/twitter-icon';
import InstagramIcon from '../../assets/images/instagram-icon';
import VkIcon from '../../assets/images/vk-icon';
import TelegramIcon from '../../assets/images/telegram-icon';
import style from './footer.module.scss';

const Footer = () => (
    <footer className={style.footer}>
        <Link to="/" className={style.footer__logo}>
            <img src={logo} alt="logo" />
        </Link>
        <ul className={style.footer__nav}>
            <li>
                <AnchorLink href="#aboutUs">About us</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#tokenDistribution">Token distribution</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#roadmap">Roadmap</AnchorLink>
            </li>
            <li>
                <AnchorLink href="#team">Team</AnchorLink>
            </li>
            <li>
                <a href={DAN_WP} target="_blank" rel="noopener noreferrer">
                    Whitepaper
                </a>
            </li>
        </ul>
        <div className={style.footer__socialIconsWrapper}>
            <a
                href="https://twitter.com/DecentralizedA6"
                target="_blank"
                rel="noopener noreferrer"
                className={style.footer__socialIconsWrapper_item}
            >
                <TwitterIcon />
            </a>
            <a
                href="https://instagram.com/decen_tralized?igshid=6yazau37u071"
                target="_blank"
                rel="noopener noreferrer"
                className={style.footer__socialIconsWrapper_item}
            >
                <InstagramIcon />
            </a>
            <a
                href="https://vk.com/public200047955"
                target="_blank"
                rel="noopener noreferrer"
                className={style.footer__socialIconsWrapper_item}
            >
                <VkIcon />
            </a>
            <a
                href="https://t.me/DecentralizedAnonymouNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className={style.footer__socialIconsWrapper_item}
            >
                <TelegramIcon />
            </a>
        </div>
    </footer>
);

export default Footer;
