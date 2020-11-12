import React, { Fragment } from 'react';
import chase from './images/chase.svg';
import norton from './images/norton.svg';
import cook from './images/cook.svg';
import francis from './images/francis.svg';
import green from './images/green.svg';
import style from './team.module.scss';

const Team = () => (
    <Fragment>
        <div className={style.team} id="team">
            <h3 className={style.team__title}>Team</h3>
            <div className={style.team__wrapper}>
                <div className={style.team__item}>
                    <img
                        className={style.team__item_photo}
                        src={chase}
                        alt="chase"
                    />
                    <p className={style.team__item_position}>Founder</p>
                    <p className={style.team__item_name}>Joseph Chase</p>
                </div>
                <div className={style.team__item}>
                    <img
                        className={style.team__item_photo}
                        src={norton}
                        alt="norton"
                    />
                    <p className={style.team__item_position}>Marketing Specialist</p>
                    <p className={style.team__item_name}>John Norton</p>
                </div>
                <div className={style.team__item}>
                    <img
                        className={style.team__item_photo}
                        src={cook}
                        alt="cook"
                    />
                    <p className={style.team__item_position}>Investor Relations</p>
                    <p className={style.team__item_name}>Robert Cook</p>
                </div>
                <div className={style.team__item}>
                    <img
                        className={style.team__item_photo}
                        src={francis}
                        alt="francis"
                    />
                    <p className={style.team__item_position}>Web designer and developer</p>
                    <p className={style.team__item_name}>Charles Francis</p>
                </div>
                <div className={style.team__item}>
                    <img
                        className={style.team__item_photo}
                        src={green}
                        alt="green"
                    />
                    <p className={style.team__item_position}>Program specialist</p>
                    <p className={style.team__item_name}>Richard Green</p>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Team;
