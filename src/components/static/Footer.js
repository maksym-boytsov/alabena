import React from 'react';
import WaveElement from '../../images/graphics/wave.png'
import {Translate, withLocalize} from "react-localize-redux";
import translation from "../../translate";

function Footer(props) {
    props.addTranslation(translation);
    return (
        <section id='contacts' className='footer'>
            <img src={WaveElement} style={{top: -1, transform: 'rotate(180deg)'}} className='graphics-wave' alt=""/>
            <div className="row w-100 pl-5">
                <div className='col-6 col-md-4 footer-text text-center text-md-left'>
                    <h5><Translate id='footer.code'/> <p>305089931</p></h5>
                    <h5><Translate id='footer.vat'/> <p>LT100012367513</p></h5>
                </div>
                <div className='col-6 col-md-4 footer-text text-center text-md-center'>
                    <h5><Translate id='footer.email'/> <p>alabenatrade@gmail.com</p></h5>
                    <h5><Translate id='footer.phone'/> <p>+37065087376</p></h5>
                </div>
                <div className='col-12 col-md-4 footer-text mt-4 mt-md-0 text-center text-md-right'>
                    <h5><Translate id='footer.factory'/> <p>Giruliu 5, Vilnius Lithuania</p></h5>
                    <h5><Translate id='footer.office'/> <p>Perkunkiemio 9-70, LT12114, Vilnius, Lithuania</p></h5>
                </div>
            </div>
            <hr className='footer-hr'/>
            <h6 className='text-center footer-copyright'>
                <Translate id='footer.allrights'/>
            </h6>
        </section>
    );
}

export default withLocalize(Footer);
