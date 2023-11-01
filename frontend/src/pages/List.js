import React from 'react';
import '../css/List.css';
import MenuBar from '../components/MenuBar';
import ListForm from '../components/ListForm';
import Footer from '../components/Footer';

function List() {
    return(
        <div className='List'>
            <div className='ListContainer'>
                <MenuBar/>
                <ListForm/>
                <Footer/>
            </div>
        </div>
    )
};

export default List;