import React from 'react';
import ReactWOW from 'react-wow';
import style from './whats-this.module.scss';

const WhatsThis = () => (
    <ReactWOW disabled={!(window.innerWidth > 767)} animation="fadeInUp" delay="0.01s">
        <section className={style.whatsThis}>
            <h2 className={style.whatsThis__title}>What’s this?</h2>
            <h3 className={style.whatsThis__subTitle}>
                LEAD GENERATION MANAGER is a decentralized platform for lead support and
                generation, powered by Blockchain technology and smart contracts. We use a
                crowdfunding model to populate our leads database, and therefore we are at
                the forefront of lead generation with a centralized data collection model.
            </h3>
            <h3 className={style.whatsThis__subTitle}>
                LEAD GENERATION MANAGER is a decentralized platform for lead support and
                generation, powered by Blockchain technology and smart contracts. We use a
                crowdfunding model to populate our leads database, and therefore we are at
                the forefront of lead generation with a centralized data collection model.
                Thanks to an intelligent reward system, we have increased the motivation
                of participants to update outdated data. This allows you to increase the
                profit from the sale of each separate industry and proportionally reward
                all participants in the process. All transactions between participants and
                buyers are stored in a distributed ledger, purchase and sell transactions
                are performed using smart contracts to ensure transaction security.
            </h3>
            <h3 className={style.whatsThis__subTitle}>
                LEAD GENERATION MANAGER is a decentralized platform for lead support and
                generation, powered by Blockchain technology and smart contracts. We use a
                crowdfunding model to populate our leads database, and therefore we are at
                the forefront of lead generation with a centralized data collection model.
                Thanks to an intelligent reward system, we have increased the motivation
                of participants to update outdated data. This allows you to increase the
                profit from the sale of each separate industry and proportionally reward
                all participants in the process. All transactions between participants and
                buyers are stored in a distributed ledger, purchase and sell transactions
                are performed using smart contracts to ensure transaction security.
            </h3>
        </section>
    </ReactWOW>
);

export default WhatsThis;
