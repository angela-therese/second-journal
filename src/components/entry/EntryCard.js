import React from "react";
import "./Entry.css"
import { Link } from "react-router-dom"

export const EntryCard = ({ entry, user }) => (

    <section className="entry">
        <h3 className="entry__author">{user?.name}</h3>
        {/* <h4 className="entry__title">{entry.title}</h4> */}
        <Link to={`/entries/detail/${entry.id}`}>
            { entry.title }
             </Link>
        <h6 className="entry__date">{entry.date}</h6>
        <p className="entry__text">{entry.text}</p>
    </section>

)