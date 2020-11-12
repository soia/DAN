import React, { Fragment } from 'react';
import ReactWOW from 'react-wow';
import background from './images/rectangle.svg';
import style from './how-it-works.module.scss';

const HowItWorks = () => (
    <Fragment>
        <div className={style.howItWorks}>
            <ReactWOW
                disabled={!(window.innerWidth > 767)}
                animation="fadeInUp"
                delay="0.01s"
            >
                <p className={style.howItWorks__title}>How does it work?</p>
                <p className={style.howItWorks__subTitle}>
                    Basic principles for providing quality data:
                </p>
                <div className={style.howItWorks__basicPrinciplesWrapper}>
                    <div className={style.howItWorks__basicPrinciples}>
                        <div className={style.howItWorks__basicPrinciples_rectangle} />
                        <p className={style.howItWorks__basicPrinciples_title}>
                            Transparency of information origin about leads
                        </p>
                        <p className={style.howItWorks__basicPrinciples_subTitle}>
                            The client is given access to the complete history of a lead,
                            including the source of origin, the time when he was added to
                            the service, the amount of this information in the past,
                            reviews of other clients about the seller and other data for
                            effective use.
                        </p>
                    </div>
                    <div className={style.howItWorks__basicPrinciples}>
                        <div className={style.howItWorks__basicPrinciples_rectangle} />
                        <p className={style.howItWorks__basicPrinciples_title}>
                            Data exclusivity and high quality of information provided
                        </p>
                        <p className={style.howItWorks__basicPrinciples_subTitle}>
                            Upon purchase, you will not receive leads collected from
                            non-existent email addresses or phone numbers. The system
                            ensures that the information is relevant.
                        </p>
                    </div>
                    <div className={style.howItWorks__basicPrinciples}>
                        <div className={style.howItWorks__basicPrinciples_rectangle} />
                        <p className={style.howItWorks__basicPrinciples_title}>
                            Data update
                        </p>
                        <p className={style.howItWorks__basicPrinciples_subTitle}>
                            This feature of the system allows you to quickly update data
                            and receive notifications of all changes for each industry.
                        </p>
                    </div>
                </div>
                <section className={style.howItWorks__principleOperation}>
                    <h3 className={style.howItWorks__principleOperation_title}>
                        Principle of operation
                    </h3>
                    <p className={style.howItWorks__principleOperation_subTitle}>
                        Members are adding more leads to the database as well as updating
                        outdated information. The entire history of the actions of all
                        participants is saved, so this is taken into account when
                        distributing the profit from the sale of data to end customers.
                        Clients can install the search criteria for leads that they need
                        for their business, as well as receive instant notifications when
                        changes or updates have occurred in some of the acquired leads.
                        The platform units depositors and buyers, works on the basis of
                        blockchain and smart contracts, which guarantee a fair
                        distribution of funds between the parties.
                    </p>
                </section>
            </ReactWOW>
            <img
                className={style.howItWorks__background}
                src={background}
                alt="background"
            />
        </div>
    </Fragment>
);

export default HowItWorks;
