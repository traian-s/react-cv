import React from "react";

export const Personal = (personal) => {
    return (
        <section className={'personal'}>
            {
                personal.list.map((item) => (
                    <div className={'personal-item'}>
                        <h5>{item.title}</h5>
                        <p>{item.summary}</p>
                    </div>
                ))
            }
        </section>
    )
}