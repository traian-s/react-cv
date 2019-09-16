import React, {useEffect} from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab, faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faAngleRight, faEnvelope, fas, faDownload, faTerminal, faSmile} from '@fortawesome/free-solid-svg-icons';
import {Profile} from "./Profile";
import {Experience} from "./Experience";
import {Personal} from "./Personal";
import {Navigation} from "./Navigation";
import {QuickInfo} from "./QuickInfo";
import {connect} from 'react-redux';

library.add(fas, fab, faGithubAlt, faLinkedin, faEnvelope, faAngleRight, faDownload, faTerminal, faSmile);

export const CV = ({stylesPDF, experience, profile, personal}) => {
    useEffect(() => {
        document.title = 'CV Traian Stanciu';
    });
    return (
        <React.Fragment>
            <Navigation />
            <div id={'printable'} className={'container'}>
                <div className={'profileBox'}>
                    <Profile {...profile}/>
                    <QuickInfo {...profile}/>
                </div>
                {true === stylesPDF && <div className={'pdfSpacer'} style={{height: 40}} />}
                <Experience {...experience}/>
                {false === stylesPDF && <Personal  {...personal}/>}
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        stylesPDF: state.stylesPDF
    }
};

export default connect(mapStateToProps)(CV);
