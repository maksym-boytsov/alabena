import React from 'react';
import LogoMain from '../../images/alabena-logo-color.svg'
import ReactSVG from "react-svg";

function Logo() {
    return (
        <>
            <ReactSVG
                src={LogoMain}
                descr='Alabena'
            />
        </>
    );
}

export default Logo;
