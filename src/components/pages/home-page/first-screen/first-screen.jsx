import React from 'react';
import DAN_WP from '../../../assets/DAN_WP.pdf';
import background from './images/firstScreenBg.svg';
import style from './first-screen.module.scss';

const FirstScreen = () => (
    <div className={style.firstScreen}>
        <h1 className={style.firstScreen__title}>
                Internet without limits for everybody
        </h1>
        <h3 className={style.firstScreen__subTitle}>
                Decentralized Anonymous Network creates a decentralized P2P VPN
                connection, backed by related tools that allow you to freely access the
                Internet, earn money by sharing your connection, and create applications
                that remove the limitations of your geoposition.
        </h3>
        <img
            className={style.firstScreen__background}
            src={background}
            alt="background"
        />
        <a
            href={DAN_WP}
            className={style.firstScreen__button}
            target="_blank"
            rel="noopener noreferrer"
        >
            View Whitepaper
        </a>
    </div>
);

export default FirstScreen;
