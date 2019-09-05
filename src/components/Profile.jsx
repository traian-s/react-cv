import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Profile = (profile) => {
    return (
        <header className={'profile'}>
            <h1>Hi, I'm {profile.bio.name}</h1>
            <div className={'intro'}>
                <div className={'info'}>
                    <div className={'title'}>
                         <h5>{profile.title}</h5>
                    </div>
                    <div className={'summary'}>

                    </div>
                    <div className={'links'}>
                        {
                            profile.contact.map((row) =>
                                <a className={row.type} href={row.link}>
                                    {row.icon && <FontAwesomeIcon icon={[row.icon.style,row.icon.name]}/>}
                                </a>)
                        }
                    </div>
                </div>
                <div className={'avatar'}>
                    <img src={'images/me.jpg'} alt={'avatar'}/>
                </div>
            </div>
        </header>
    )
}