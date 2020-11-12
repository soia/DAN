import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import HowItWorks from './how-it-works';
import WhatsThis from './whats-this';
import TokenLeadGeneration from './token-lead-generation';
import Team from './team';
import RoadMap from './road-map';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <HowItWorks />
        <WhatsThis />
        <TokenLeadGeneration />
        <Team />
        <RoadMap />
    </Fragment>
);

export default HomePage;
