import React from "react";
import "./Journal.css";
import { EntryCard } from "./entry/EntryCard";
import { PropsAndState } from "../PropsAndState";


export const  Journal = () => (
    <>
        <h1>The Second Journal</h1>
        <p>Because one journal isn't enough</p>
        <PropsAndState yourName={"Angie"} />
        <h3>Journal Entries</h3>
        <article className="entries">
        <EntryCard />
        

        </article>
    </>
)