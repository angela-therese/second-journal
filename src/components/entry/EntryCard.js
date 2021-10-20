import React from "react";
import "./Entry.css"

export const EntryCard = ({ entry, user }) => (

    <section className="entry">
        <h3 className="entry__author">{user?.name}</h3>
        <h4 className="entry__title">{entry.title}</h4>
        <h6 className="entry__date">{entry.date}</h6>
        <p className="entry__text">{entry.text}</p>
    </section>

)