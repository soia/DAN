import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import HowItWorks from './how-it-works';
import Starting from './starting';
import Implementation from './implementation';
import Team from './team';
import RoadMap from './road-map';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Starting />
        <Implementation />
        <HowItWorks />
        <RoadMap />
        <Team />
    </Fragment>
);

export default HomePage;
