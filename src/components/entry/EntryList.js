import React, { useContext, useEffect } from "react"
import { EntryContext } from "./EntryProvider"
import { EntryCard } from "./EntryCard"
import "./Entry.css"

export const EntryList = () => {
  // This state changes when `getEntries()` is invoked below
  const { entries, getEntries } = useContext(EntryContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("AnimalList: useEffect - getAnimals")
    getEntries()

  }, [])

// I don't understand line 23
  return (
    <div className="entries">
      {/* {console.log("AnimalList: Render", animals)} */}
      {
        entries.map(entry => {
          return <EntryCard key={entry.id} entry={entry} />
        })
      }
    </div>
  )
}
