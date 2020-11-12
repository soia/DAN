import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import McCormick from './images/Charles McCormick.svg';
import Summers from './images/David Summers.svg';
import Nelson from './images/Elizabeth Nelson.svg';
import Fleming from './images/John Fleming.svg';
import Sutton from './images/Robert Sutton.svg';
import style from './team.module.scss';

const Team = () => (
    <Fragment>
        <div className={style.team}>
            <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInUp" delay="0.01s">
                <h3 className={style.team__title}>Team</h3>
                <div className={style.team__wrapper}>
                    <div className={style.team__item}>
                        <div className={style.team__imgWrapper}>
                            <img
                                className={style.team__item_photo}
                                src={Fleming}
                                alt="Fleming"
                            />
                        </div>
                        <p className={style.team__item_name}>John Fleming</p>
                        <p className={style.team__item_position}>Project founder</p>
                    </div>
                    <div className={style.team__item}>
                        <div className={style.team__imgWrapper}>
                            <img
                                className={style.team__item_photo}
                                src={Summers}
                                alt="Summers"
                            />
                        </div>
                        <p className={style.team__item_name}>David Summers</p>
                        <p className={style.team__item_position}>Senior programmer</p>
                    </div>
                    <div className={style.team__item}>
                        <div className={style.team__imgWrapper}>
                            <img
                                className={style.team__item_photo}
                                src={Nelson}
                                alt="Nelson"
                            />
                        </div>
                        <p className={style.team__item_name}>Elizabeth Nelson</p>
                        <p className={style.team__item_position}>Advertising manager</p>
                    </div>
                    <div className={style.team__item}>
                        <div className={style.team__imgWrapper}>
                            <img
                                className={style.team__item_photo}
                                src={Sutton}
                                alt="Sutton"
                            />
                        </div>
                        <p className={style.team__item_name}>Robert Sutton</p>
                        <p className={style.team__item_position}>Public Relations</p>
                    </div>
                    <div className={style.team__item}>
                        <div className={style.team__imgWrapper}>
                            <img
                                className={style.team__item_photo}
                                src={McCormick}
                                alt="McCormick"
                            />
                        </div>
                        <p className={style.team__item_name}>Charles McCormick</p>
                        <p className={style.team__item_position}>Programmer</p>
                    </div>
                </div>
            </ReactWOW>
        </div>
    </Fragment>
);

export default Team;
