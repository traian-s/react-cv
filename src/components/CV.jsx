import React from "react";
import {library } from '@fortawesome/fontawesome-svg-core';
import {fab,faGithubAlt, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {fas, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Profile} from "./Profile";
import {Experience} from "./Experience";
import {Personal} from "./Personal";

library.add(fas, fab, faGithubAlt, faLinkedin, faEnvelope);

export const CV = ({experience, profile, personal}) =>{
    return (
      <div className={'container'}>
          <Profile {...profile}/>
          <Experience {...experience}/>
          <Personal {...personal}/>
      </div>
    );
}