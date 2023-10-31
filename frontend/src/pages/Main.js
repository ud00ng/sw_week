import React from 'react';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import '../css/Main.css';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className='Main'>
            <div className='MainContainer'>
                <MenuBar/>
                <div className='MainContents'>
                    <div className='banner'>
                        <img src='/img/banner.png'/>
                        <div className='bnContents'>
                        <p>Smart Used Trade<br/>for Student Service</p>
                            <Link to='/upload' className='toUpload'>
                                <div className='StartBtn'>
                                    <p>시작하기</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='aboutContainer'>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Main;