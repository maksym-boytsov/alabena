import React from 'react';
import Certificate from '../images/certificate.jpg'
import { Translate, withLocalize } from "react-localize-redux";

const Certificates = () => {
    return (
        <section id='certificates' className='certificates container'>
            <h1 className='certificates-title'><Translate id='certificates.title'/></h1>
            <div className='certificates-item'><a className='certificates-link' href={Certificate}>EU-REDcert-553-431-90001</a></div>
        </section>
    );
};

export default withLocalize(Certificates)