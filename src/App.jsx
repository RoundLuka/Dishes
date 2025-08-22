import React from 'react'
// import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Navbar page={"Home"} />
            <main>
                <Outlet /> {/* Rendering Home, Menu, Cart, Contact */}
                <div className='body-div'>
                    <div className='background-div'></div>
                    <div className='content-div'>
                        <h1 className='cower-h1'>Delicous Food</h1>
                        <button className='cower-btn'>Order Now!</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App
