import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Benefits from './benefits';
import HowItWorks from './how-it-works';
import Starting from './starting';
import Features from './features';
import Implementation from './implementation';
import Team from './team';
import RoadMap from './road-map';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Starting />
        <Benefits />
        <Features />
        <Implementation />
        <HowItWorks />
        <RoadMap />
        <Team />
    </Fragment>
);

export default HomePage;
