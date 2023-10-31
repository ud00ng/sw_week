import React from 'react';
import '../css/MarketPlace.css';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import PlaceForm from '../components/PlaceForm';

function MarketPlace () {
    return (
        <div className='MarketPlace'>
            <div className='mpContainer'>
                <MenuBar/>
                <PlaceForm/>
                <Footer/>
            </div>
        </div>
    )
};

export default MarketPlace;