import React from "react";
import "./Journal.css";
import { EntryCard } from "./entry/EntryCard";


export const  Journal = () => (
    <>
        <h1>The Second Journal</h1>
        <p>Because one journal isn't enough</p>
        <h2>Journal Entries</h2>
        <article className="entries">
        <EntryCard />

        </article>
    </>
)