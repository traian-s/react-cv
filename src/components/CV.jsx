import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab, faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faAngleRight, faEnvelope, fas, faDownload, faTerminal, faSmile} from '@fortawesome/free-solid-svg-icons';
import {Profile} from "./Profile";
import {Experience} from "./Experience";
import {Personal} from "./Personal";
import {Navigation} from "./Navigation";
import {QuickInfo} from "./QuickInfo";

library.add(fas, fab, faGithubAlt, faLinkedin, faEnvelope, faAngleRight, faDownload, faTerminal, faSmile);

export const CV = ({experience, profile, personal}) => {
    return (
        <React.Fragment>
            <Navigation />
            <div id={'printable'} className={'container'}>
                <div className={'profileBox'}>
                    <Profile {...profile}/>
                    <QuickInfo {...profile}/>
                </div>
                <Experience {...experience}/>
                <Personal  {...personal}/>
            </div>
        </React.Fragment>
    );
}
