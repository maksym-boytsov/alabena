import React from 'react';
import '../sass/main.scss';
import {withLocalize} from "react-localize-redux";
import {renderToStaticMarkup} from "react-dom/server";

import Navbar from './static/Navbar';
import Main from './Main';
import Footer from './static/Footer';
import About from './About';
import Benefits from "./Benefits";
import Cards from "./Cards";
import LanguageToggle from "./Languages";
import Certificates from "./Certificates";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                {name: "English", code: "en"},
                {name: "Русский", code: "ru"},
                {name: "Україньска", code: "ua"},
                {name: "Polska", code: "pl"}
            ],
            options: {renderToStaticMarkup}
        });
    }
    render() {
        return (
            <>
                <Navbar/>
                <Main/>
                <LanguageToggle/>
                <About/>
                <Benefits/>
                <Cards/>
                <Certificates/>
                <Footer/>
            </>
        );
    }
}

export default withLocalize(App);
