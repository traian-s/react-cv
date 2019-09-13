import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Experience = (experience) => {
    return (
        <section id={'experience'} className={'experience'}>
            <h2>Work Experience</h2>
            {experience.list.map((item, idx) => (
                <article key={idx}>
                    <div className={'main'}>
                        <header>
                            <h5>{item.title}</h5>
                            {item.logo && <span className={'logo'}>
                                <img src={`images/${item.logo}`} alt={'item.company'} />
                            </span>}
                            <p className={'small'}>
                                {!item.logo && item.company}<br/>
                                <span className={'date'}>{item.date}</span>
                            </p>
                         </header>
                        <p className={'summary'}>
                            {item.summary}
                        </p>
                        <ul className={'highlights'}>
                            {item.highlights.map((highlight, idx) =>
                                <li key={idx}>
                                    <FontAwesomeIcon icon={'terminal'} />
                                    {highlight}</li>)}
                        </ul>
                    </div>
                    <aside>
                       <span className={'duration'}>
                            {item.duration}
                        </span>
                        <div className={'tagList'}>
                            {item.tags.map((tag, idx) => <span className={'tag'} key={idx}>{tag}</span>)}
                        </div>
                    </aside>
                </article>
            ))}
        </section>
    )
}