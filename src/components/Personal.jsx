import React from "react";

export const Personal = (personal) => {
    return (
        <section className={'personal'}>
            <h2>Personal Qualities</h2>
            <div className={'personal-list'}>
                {
                    personal.list.map((item) => (
                        <div className={'personal-item'}>
                            <h5>{item.title}</h5>
                            <p>{item.summary}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}