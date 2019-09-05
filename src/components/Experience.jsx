import React from "react";

export const Experience = (experience) => {
    return (
        <section className={'experience'}>
            {experience.list.map((item) => (
                <article>
                    <header>
                        <h5>{item.title}</h5>
                        <p className={'small'}>{item.company}</p>
                        <date>{item.date}</date>
                    </header>
                    <p className={'summary'}>
                        {item.summary}
                    </p>
                    <ul className={'highlights'}>
                        {item.highlights.map((highlight) => <li>{highlight}</li>)}
                    </ul>
                    <div className={'tagList'}>
                        {item.tags.map((tag) => <span>{tag}</span>)}
                    </div>
                </article>
            ))}
        </section>
    )
}