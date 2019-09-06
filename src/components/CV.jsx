import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab, faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faAngleRight, faEnvelope, fas, faDownload} from '@fortawesome/free-solid-svg-icons';
import {Profile} from "./Profile";
import {Experience} from "./Experience";
import {Personal} from "./Personal";
import {Navigation} from "./Navigation";
import {QuickInfo} from "./QuickInfo";

library.add(fas, fab, faGithubAlt, faLinkedin, faEnvelope, faAngleRight, faDownload);

export const CV = ({experience, profile, personal}) => {
    return (
        <React.Fragment>
            <Navigation />
            <div id={'printable'} className={'container'}>
                <Profile {...profile}/>
                <QuickInfo {...profile}/>
                <Experience {...experience}/>
                <Personal  {...personal}/>
            </div>
        </React.Fragment>
    );
}