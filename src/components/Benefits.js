import React from 'react';
import ReactSVG from "react-svg";
import translation from "../translate.json";
import { Translate, withLocalize } from "react-localize-redux";

import WorkerImg from '../images/icons/worker.svg';
import QualityImg from '../images/icons/inspection.svg';
import QuantityImg from '../images/icons/storage-tank.svg';

const Benefits = (props) => {
    props.addTranslation(translation);
    const benefits = [
        {src: WorkerImg, name: 'first'},
        {src: QualityImg, name: 'second'},
        {src: QuantityImg, name: 'third'},
    ];
    return (
        <section id='benefits'>
            <h1 className='benefits-header'>
                <Translate id="benefits.title"/>
            </h1>
            <div className='row' style={{width: '101%'}}>
                {benefits.map(({name, src}, id) => (
                    <div key={id} className='col-12 col-sm-4 benefits-item'>
                        <ReactSVG className='benefits-icon' src={src} descr='icon'/>
                        <h3>
                            <Translate id={"benefits."+ name +".header"}/>
                        </h3>
                        <p>
                            <Translate id={"benefits."+ name +".text"}/>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default withLocalize(Benefits);
