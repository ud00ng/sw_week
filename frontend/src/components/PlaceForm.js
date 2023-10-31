import React from 'react';
import '../css/PlaceForm.css';

function PlaceForm() {
    return (
        <div className='PlaceForm'>
            <div className='pfContainer'>
                <div className='pfContents'>
                    <h1>등록을 완료하셨다면<br/>물품을 들고, 센터에 방문 해주세요!</h1>
                    <h3>주소 : 강원도 춘천시 한림대학길1</h3>
                </div>
                <div className='pfMap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12595.251949272706!2d127.73510181756566!3d37.88805598160912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3562e5e939c43ac7%3A0x2419c3aa2130905c!2z7ZWc66a864yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1698771792275!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
};

export default PlaceForm;