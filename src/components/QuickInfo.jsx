import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const QuickInfo = (profile) => {
    return (
        <section className={'quickInfo'}>
            <div className={'dosblueSep'}>
                <div className={'classStyle'}>
                    <div>
                        {`<Name>`}
                        <div>
                            {`<Phone>`}
                            <div>
                                {`<Email>`}
                                <div>
                                    {`<GitHub>`}
                                    <div>
                                        {profile.languages.map((item, idx) =>
                                        <React.Fragment key={idx}>{`<${item.lang} = "${item.value}"/>`}<br/></React.Fragment>
                                        )}
                                        <div>
                                            {`<Job>`}
                                            <div>
                                                {`<Status>`}
                                                <div><FontAwesomeIcon icon={'smile'} /></div>
                                                {`</${profile.status}>`}
                                            </div>
                                            <span className={'dosbluebg'}>{`</${profile.title}>`}</span>
                                        </div>
                                    </div>
                                    {`</${profile.github}>`}
                                </div>
                                {`</${profile.contact.email}>`}
                            </div>
                            {`</${profile.contact.phone}>`}
                        </div>
                        {`</${profile.bio.name}>`}
                    </div>
                </div>
            </div>
            <div className={'tagcloud'}>
                <div>
                {profile.keywords.general.map((item, idx) =>
                    <span className={'tag'} key={idx}>
                        {item}
                    </span>
                )}
                </div>
                <div>
                    {profile.keywords.personal.map((item, idx) =>
                            <span className={'tag'} key={idx}>
                        {item}
                    </span>
                    )}
                </div>
                <div>
                    {profile.keywords.technical.map((item, idx) =>
                            <span className={'tag'} key={idx}>
                        {item}
                    </span>
                    )}
                </div>
            </div>
        </section>
    )
}