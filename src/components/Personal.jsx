import React from "react";

export const Personal = (personal) => {
    return (
        <section id={'personal'} className={'personal'}>
            <h2>Personal Qualities</h2>
            <div className={'personal-list'}>
                {
                    personal.list.map((item, idx) => (
                        <div className={'personal-item'} key={idx}>
                            <h5>{item.title}</h5>
                            <p>{item.summary}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}