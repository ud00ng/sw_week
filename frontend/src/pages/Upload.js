import React from 'react';
import '../css/Upload.css';
import MenuBar from '../components/MenuBar';
import UploadForm from '../components/UploadForm';
import Footer from '../components/Footer';

function Upload() {
    return (
        <div className='Upload'>
            <MenuBar/>
            <UploadForm/>
            <Footer/>
        </div>
    )
};

export default Upload;