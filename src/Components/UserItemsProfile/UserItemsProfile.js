import React from 'react';
import './UserItemsProfile.css';
import { useTranslation } from "react-i18next";

const UserItemsProfile = (props) => {
    const { t } = useTranslation();
    return (
        <div className='userItemsCardContainer'>
           <div className='userItemsCard'>

                <div className='boxItemsCard'>
                    <img src={`./images/${props.url_Image}`} alt="userCard" />
                </div>

                <div className='userItemsContent'>
                    <div className='detailContent'>
                        <h2>{props.name}</h2>
                        <p>{t("position-title")} {props.position}</p>
                        <p>{t("country-title")} {props.address}</p>
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
