import React from 'react';
import style from './features.module.scss';

const Features = () => {
    const data = [
        {
            title: 'Launch of node',
            subTitle:
                'Open the Internet for everyone and get the reward in the form of DECENTRALIZED ANONYMOUS NETWORK (DAN).',
        },
        {
            title: 'VPN of the next generation',
            subTitle:
                'Implementation of a connection in a network of distributed nodes, managed by people from around the world.',
        },
        {
            title: 'Universal API',
            subTitle:
                'Develop applications that bypass censorship with our global pool of IP addresses.',
        },
    ];

    return (
        <div className={style.features}>
            <h3 className={style.features__title}>
                Features of DECENTRALIZED ANONYMOUS NETWORK
            </h3>

            <div className={style.features__container}>
                {data.map(item => {
                    const { title, subTitle } = item;

                    return (
                        <div key={title} className={style.features__item}>
                            <p className={style.features__item_title}>{title}</p>
                            <p className={style.features__item_subTitle}>{subTitle}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
