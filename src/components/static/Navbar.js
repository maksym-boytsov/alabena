import React from 'react';

const links = [
    {link: 'About', href: '#'},
    {link: 'Benefits', href: '#'},
    {link: 'Products', href: '#'},
    {link: 'Contacts', href: '#'},
];

class Navbar extends React.Component{
    constructor(props) {
        super(props);
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
        const { scrollPos } = this.state;
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos
        });
    };

    render() {
        return (
            <div className={this.state.show ? "navbarr-active navbarr" : "navbarr-hidden navbarr"} onScroll={this.handleScroll}>
                <ul className='navbarr-list'>
                    {links.map(({link, href}) => (
                        <li key={link} className='navbarr-item'><a href={href}>{link}</a></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Navbar;
