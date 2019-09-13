import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Profile = (profile) => {
    return (
        <header className={'profile'}>
            <div className={'intro'}>
                <div className={'info'}>
                    <div className={'summary'}>
                        <h1>Hi, I'm {profile.bio.name}</h1>
                        <p>{profile.summary}</p>
                    </div>
                    <div className={'links'}>
                        {
                            profile.links.map((row, idx) =>
                                <a target='_blank'  rel='noopener noreferrer'
                                   className={`icon-${row.type}`}
                                   href={row.link} key={idx}>
                                    {row.icon && <FontAwesomeIcon icon={[row.icon.style,row.icon.name]}/>}
                                </a>)
                        }
                    </div>
                </div>
                <div className={'avatar'}>
                    <img src={'images/me.png'} alt={'avatar'}/>
                    <img className={'altAvatar'} src={'images/me.jpg'} alt={'alt-avatar'} />
                </div>
            </div>
        </header>
    )
}