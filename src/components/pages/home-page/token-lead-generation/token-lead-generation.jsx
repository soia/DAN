import React from 'react';
import ReactWOW from 'react-wow';

import background from './images/background.svg';
import oval from './images/Oval.svg';
import style from './token-lead-generation.module.scss';

const TokenLeadGeneration = () => (
    <div className={style.tokenLeadGeneration}>
        <ReactWOW
            disabled={!(window.innerWidth > 767)}
            animation="fadeInUp"
            delay="0.01s"
        >
            <section>
                <h3 className={style.tokenLeadGeneration__title}>
                    Token Lead Generation Manager (LGM)
                </h3>
                <div className={style.tokenLeadGeneration__subTitleWrapper}>
                    <p className={style.tokenLeadGeneration__subTitle}>
                        The token is used in the system for internal payments between
                        buyers, the platform and members, as well as to encourage users to
                        add and update data in the system. Participants receive tokens for
                        adding new data to the system, which are bought by other users.
                    </p>
                    <p className={style.tokenLeadGeneration__subTitle}>
                        Tokens will be used to reward members whose data is acquired. For
                        this, 10% of tokens will be reserved in the system. When the
                        reward tokens run out, LEAD GENERATION MANAGER plans to redeem
                        tokens on exchanges.
                    </p>
                </div>
                <p className={style.tokenDistribution}>Token Distribution</p>
                <div className={style.tokenDistribution__wrapper}>
                    <div className={style.tokenDistribution__item}>
                        <img
                            className={style.tokenDistribution__item_img}
                            src={oval}
                            alt="oval"
                        />
                        <div>
                            <p className={style.tokenDistribution__item_title}>IEO</p>
                            <p className={style.tokenDistribution__item_titleSub} />
                            <p className={style.tokenDistribution__item_subTitle}>
                                10 000 000 LGM
                            </p>
                        </div>
                    </div>
                    <div className={style.tokenDistribution__item}>
                        <img
                            className={style.tokenDistribution__item_img}
                            src={oval}
                            alt="oval"
                        />
                        <div>
                            <p className={style.tokenDistribution__item_title}>Airdrop</p>
                            <p className={style.tokenDistribution__item_titleSub}>
                                will be frozen till 20/09/2020
                            </p>
                            <p className={style.tokenDistribution__item_subTitle}>
                                5 000 000 LGM
                            </p>
                        </div>
                    </div>
                    <div className={style.tokenDistribution__item}>
                        <img
                            className={style.tokenDistribution__item_img}
                            src={oval}
                            alt="oval"
                        />
                        <div>
                            <p className={style.tokenDistribution__item_title}>
                                Staking Pool
                            </p>
                            <p className={style.tokenDistribution__item_titleSub} />
                            <p className={style.tokenDistribution__item_subTitle}>
                                5 000 000 LGM
                            </p>
                        </div>
                    </div>
                    <div className={style.tokenDistribution__item}>
                        <img
                            className={style.tokenDistribution__item_img}
                            src={oval}
                            alt="oval"
                        />
                        <div>
                            <p className={style.tokenDistribution__item_title}>Team</p>
                            <p className={style.tokenDistribution__item_titleSub}>
                                will be frozen till 01/12/2020
                            </p>
                            <p className={style.tokenDistribution__item_subTitle}>
                                1 000 000 LGM
                            </p>
                        </div>
                    </div>
                </div>
                <p className={style.totalCapitalization}>
                    Total capitalization: 21 000 000 LGM
                </p>
            </section>
        </ReactWOW>
        <img
            className={style.tokenLeadGeneration__background}
            src={background}
            alt="background"
        />
    </div>
);

export default TokenLeadGeneration;
