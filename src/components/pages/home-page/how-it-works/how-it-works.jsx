import React from 'react';
import background from './images/background.svg';
import style from './how-it-works.module.scss';

const HowItWorks = () => {
    const data = [
        {
            title: 'IEO',
            content: '100.000.000 DAN',
            subTitle: '',
        },
        {
            title: 'Staking Pool',
            content: '60.000.000 DAN',
            subTitle: '',
        },
        {
            title: 'Airdrop',
            content: '25.000.000 DAN',
            subTitle: 'Will be frozen till 31.12.2020',
        },
        {
            title: 'Team',
            content: '5.000.000 DAN',
            subTitle: 'Will be frozen till 01.03.2021',
        },
    ];

    return (
        <div className={style.container}>
            <div className={style.howItWorks} id="tokenDistribution">
                <div>
                    <p className={style.howItWorks__title}>How does it work?</p>
                    <p className={style.howItWorks__subTitle}>
                        You pay for the use of an IP address in the form of DAN tokens and
                        access to tools from a different geographic location. In parallel,
                        DECENTRALIZED ANONYMOUS NETWORK protects your traffic from prying
                        eyes.
                    </p>
                </div>
                <div>
                    <img
                        className={style.howItWorks__background}
                        src={background}
                        alt="background"
                    />
                </div>
            </div>
            <div className={style.destribution}>
                <p className={style.destribution__title}>Token Destribution</p>
                <div className={style.destribution__container}>
                    {data.map(item => {
                        const { title, content, subTitle } = item;

                        return (
                            <div className={style.destribution__item}>
                                <p className={style.destribution__item_title}>{title}</p>
                                <p className={style.destribution__item_content}>{content}</p>
                                {subTitle ? (
                                    <p className={style.destribution__item_subTitle}>
                                        {subTitle}
                                    </p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
                <div className={style.destribution__bottom}>
                    <p>Price: 0.00000010 BTC</p>
                    <p>Total: 190 000 000 DAN</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
