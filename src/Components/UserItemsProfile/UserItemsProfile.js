import React from 'react';
import './UserItemsProfile.css';

const UserItemsProfile = (props) => {
    return (
        <div className='userItemsCardContainer'>
           <div className='userItemsCard'>

                <div className='boxItemsCard'>
                    <img src={`./images/${props.url_Image}`} alt="userCard" />
                </div>

                <div className='userItemsContent'>
                    <div className='detailContent'>
                        <h2>{props.name}</h2>
                        <p>Position: {props.position}</p>
                        <p>From: {props.address}</p>
                    </div>
                </div>

                <div className='userItemsSocials'>
                    <a href="/">
                        <img src="./images/facebook.png" alt="socials" />
                    </a>
                    <a href="/">
                        <img src="./images/instagram.png" alt="socials" />
                    </a>
                    <a href="/">
                        <img src="./images/gmail.png" alt="socials" />
                    </a>
                </div>

            </div> 
        </div>
    )
}

export default UserItemsProfile;
