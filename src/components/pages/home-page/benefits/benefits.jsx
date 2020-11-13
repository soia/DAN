import React from 'react';
import line from './images/line.svg';
import mobileLine from './images/mobile-line.svg';
import style from './benefits.module.scss';

const Benefits = () => (
    <div className={style.benefits} id="aboutUs">
        <h3 className={style.benefits__title}>Benefits of use</h3>

        <div className={style.benefits__container}>
            <div className={style.benefits__top}>
                <div className={style.benefits__item}>
                    <p className={style.benefits__item_title}>
                        Hundreds of IP addresses <br /> around the world
                    </p>
                    <p className={style.benefits__item_subTitle}>
                        Our global network of home IP-nodes lays the foundation for all
                        kinds of secure next generation connections, which will be built
                        on its basis.
                    </p>
                </div>
                <div><img src={mobileLine} alt="line" className={style.benefits__mobileLine} /></div>

                <div className={style.benefits__item}>
                    <p className={style.benefits__item_title}>
                        Internet <br /> security
                    </p>
                    <p className={style.benefits__item_subTitle}>
                        No central data entry and exit points. Explore the Internet safely
                        and anonymously.
                    </p>
                </div>
            </div>
            <div><img src={mobileLine} alt="line" className={style.benefits__mobileLine} /></div>
            <img src={line} alt="line" className={style.benefits__line} />
            <div className={style.benefits__bottom}>
                <div className={style.benefits__item}>
                    <p className={style.benefits__item_title}>
                        Global internet <br /> infrastructure
                    </p>
                    <p className={style.benefits__item_subTitle}>
                        Our Wide Area Network of Home IP-nodes lays the foundation for all
                        kinds of secure next generation connections, which will be built
                        on its basis.
                    </p>
                </div>
                <div><img src={mobileLine} alt="line" className={style.benefits__mobileLine} /></div>
                <div className={style.benefits__item}>
                    <p className={style.benefits__item_title}>
                        Open source <br />
                        code
                    </p>
                    <p className={style.benefits__item_subTitle}>
                        Cooperation and manageability in the community built on the
                        principles of transparency and freedom.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Benefits;
