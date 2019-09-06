import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Profile = (profile) => {
    return (
        <header className={'profile'}>
            <div className={'intro'}>
                <div className={'info'}>
                    <div className={'summary'}>
                        <h3>Hi, I'm {profile.bio.name}</h3>
                        <p>{profile.summary}</p>
                    </div>
                    <div className={'links'}>
                        {
                            profile.links.map((row) =>
                                <a target='_blank'
                                   className={`icon-${row.type}`}
                                   href={row.link}>
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