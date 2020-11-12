import React from 'react';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import style from './implementation.module.scss';

const Implementation = () => {
    const data = [
        {
            title: 'Unlock any online service.',
            img: icon1,
            subTitle: 'Full Internet access and maximum convenience for users.',
        },
        {
            title: 'Create a VPN service without a system administrator',
            img: icon2,
            subTitle:
                'Connect to a pool of IP addresses with built-in detection, accounting and automation functions.',
        },
        {
            title: 'Maximum encryption and security',
            img: icon3,
            subTitle:
                'Built-in automatic traffic distribution function using innovative encryption protocols.',
        },
    ];

    return (
        <div className={style.implementation}>
            <h3 className={style.implementation__title}>Implementation</h3>

            <div className={style.implementation__container}>
                {data.map(item => {
                    const { title, img, subTitle } = item;

                    return (
                        <div className={style.implementation__item}>
                            <img
                                src={img}
                                alt="img"
                                className={style.implementation__item_icon}
                            />
                            <div className={style.implementation__item_rightSide}>
                                <p className={style.implementation__item_title}>
                                    {title}
                                </p>
                                <p className={style.implementation__item_subTitle}>
                                    {subTitle}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Implementation;
