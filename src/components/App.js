import React from 'react';
import '../sass/main.scss';

import Navbar from './static/Navbar';
import Main from './pages/Main';
import Footer from './static/Footer';
import About from './pages/About';
import Products from "./pages/Products";
function App() {
    return (
        <div>
            <Navbar/>
            <Main/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
