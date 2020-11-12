import React, { Component } from 'react';
import style from './starting.module.scss';

class Starting extends Component {
    interval = null;

    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
    };

    componentDidMount() {
        const countDownDate = new Date('Nov 20, 2020 11:00:00').getTime();
        this.interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.setState({
                days,
                hours,
                minutes,
                seconds,
            });

            if (distance < 0) {
                clearInterval(this.interval);

                this.setState({
                    days: '',
                    hours: '',
                    minutes: '',
                    seconds: '',
                });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {
            days, hours, minutes, seconds,
        } = this.state;

        return (
            <div className={style.starting}>
                <h3 className={style.starting__title}>
                    Starting <br /> IEO
                    <a
                        href="https://coinsbit.io/"
                        className={style.starting__button}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to Coinsbit
                    </a>
                </h3>
                <div className={style.countDown}>
                    <div className={style.countDown__item}>
                        <p className={style.countDown__item_time}>{days}</p>
                        <p className={style.countDown__item_label}>days</p>
                    </div>
                    <div className={style.countDown__item}>
                        <p className={style.countDown__item_time}>{hours}</p>
                        <p className={style.countDown__item_label}>hours</p>
                    </div>
                    <div className={style.countDown__item}>
                        <p className={style.countDown__item_time}>{minutes}</p>
                        <p className={style.countDown__item_label}>minutes</p>
                    </div>
                    <div className={style.countDown__item}>
                        <p className={style.countDown__item_time}>{seconds}</p>
                        <p className={style.countDown__item_label}>seconds</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Starting;
