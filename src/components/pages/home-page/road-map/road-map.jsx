import React from 'react';
import ReactWOW from 'react-wow';
import background from './images/background.svg';
import roadMapImage from './images/roadmap.svg';
import mobileRoadmap from './images/mobileRoadmap.svg';
import style from './road-map.module.scss';

const RoadMap = () => (
    <div className={style.roadMap}>
        <ReactWOW
            disabled={!(window.innerWidth > 767)}
            animation="fadeInUp"
            delay="0.01s"
        >
            <h3 className={style.roadMap__title}>Road map</h3>
            <img className={style.roadMap__roadMapImage} src={roadMapImage} alt="roadMapImage" />
            <img className={style.roadMap__mobileRoadmap} src={mobileRoadmap} alt="mobileRoadmap" />
        </ReactWOW>
        <img className={style.roadMap__background} src={background} alt="background" />
    </div>
);

export default RoadMap;
