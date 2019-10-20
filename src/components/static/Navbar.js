import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import translation from "../../translate.json";
import {Translate, withLocalize} from "react-localize-redux";

const links = [
    {name: 'about', href: '#about'},
    {name: 'benefits', href: '#benefits'},
    {name: 'products', href: '#products'},
    {name: 'contacts', href: '#contacts'},
];

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(translation);
        this.state = {
            show: true,
            scrollPos: 0
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        });
    };

    render() {
        return (
            <div className={this.state.show ? "navbarr-active navbarr" : "navbarr-hidden navbarr"}
                 onScroll={this.handleScroll}>
                <ul className='navbarr-list'>
                    {links.map(({name, href}, id) => (
                        <li key={id} className='navbarr-item'>
                            <AnchorLink href={href}>
                                <Translate id={"navbar."+name}/>
                            </AnchorLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default withLocalize(Navbar);
