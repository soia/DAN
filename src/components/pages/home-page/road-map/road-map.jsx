import React from 'react';
import roadMapImage from './images/roadmap.svg';
import mobileRoadmap from './images/mobileRoadmap.svg';
import style from './road-map.module.scss';

const RoadMap = () => (
    <div className={style.roadMap} id="roadmap">
        <h3 className={style.roadMap__title}>Road map</h3>
        <img
            className={style.roadMap__roadMapImage}
            src={roadMapImage}
            alt="roadMapImage"
        />
        <img
            className={style.roadMap__mobileRoadmap}
            src={mobileRoadmap}
            alt="mobileRoadmap"
        />
    </div>
);

export default RoadMap;
