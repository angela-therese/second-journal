import React, { useContext, useEffect, useState } from "react"
import { EntryContext } from "./EntryProvider"
import "./Entry.css"
import { useParams, useHistory } from "react-router-dom"

export const EntryDetail = () => {
  const { getEntryById } = useContext(EntryContext)

	const [entry, setEntry] = useState({})

	const {entryId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", entryId)
    getEntryById(entryId)
    .then((response) => {
      setEntry(response)
    })
    }, [])

  return (
    <section className="Entry">
      <h3 className="entry__title">{entry.title}</h3>
      <div className="entry__author">Author: {entry.user?.name}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="entry__text">{entry.text}</div>
      
    </section>
  )
}