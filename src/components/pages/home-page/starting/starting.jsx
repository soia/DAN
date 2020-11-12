import React from 'react';
import style from './starting.module.scss';

const Starting = () => (
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
    </div>
);

export default Starting;
