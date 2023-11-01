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
                            <img src='/img/main02.png'/>
                        </div>
                    </div>
                </div>
                <div className='aboutContainer'>
                    <div className='aboutTitle'>
                        <h1>Holy?</h1><span>Hallym of Excellent Community</span>
                        <p>춘천시에서 진행하는 학생들을 위한 중고나눔 플랫폼 입니다.<br/><br/>
                        크게 4가지로 서비스 절차가 진행이 되어 <br/>보다 편리하고, 신뢰성 있게 제공 해드립니다!</p>
                    </div>
                    <div className='aboutContents'>
                        <img src="/img/service.png"/>
                    </div>
                </div>
                <div className='aboutContainer2'>
                    <h1>4 Step of Service</h1>
                    <img src="/img/about2.png"/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Main;