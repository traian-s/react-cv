import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Experience = (experience) => {
    return (
        <section className={'experience'}>
            <h2>Work Experience</h2>
            {experience.list.map((item) => (
                <article>
                    <header>
                        <h5>{item.title}</h5>
                        {item.logo && <span class={'logo'}>
                            <img src={`images/${item.logo}`} alt={'item.company'} />
                        </span>}
                        <p className={'small'}>
                            {item.company}<br/>
                            <date>{item.date}</date>
                        </p>
                        <span className={'duration'}>
                            {item.duration}
                        </span>
                    </header>
                    <p className={'summary'}>
                        {item.summary}
                    </p>
                    <ul className={'highlights'}>
                        {item.highlights.map((highlight) =>
                            <li>
                                <FontAwesomeIcon icon={'angle-right'} />
                                {highlight}</li>)}
                    </ul>
                    <div className={'tagList'}>
                        {item.tags.map((tag) => <span className={'tag'}>{tag}</span>)}
                    </div>
                </article>
            ))}
        </section>
    )
}