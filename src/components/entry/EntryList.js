import React, { useContext, useEffect } from "react"
import { EntryContext } from "./EntryProvider"
import { UserContext } from "../user/UserProvider"
import { EntryCard } from "./EntryCard"
import "./Entry.css"
import { useHistory } from "react-router-dom"

export const EntryList = () => {
  // This state changes when `getEntries()` is invoked below
  const { entries, getEntries } = useContext(EntryContext)
  const { users, getUsers } = useContext(UserContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEntries()
      .then(getUsers)

  }, [])


  return (
    <>
      <h2>Entries</h2>
      <button onClick={() => { history.push("/entries/create") }}>
        Add Entry
      </button>

      <div className="entries">
        {entries.map(entry => {
          const author = users.find(u => u.id === entry.userId)

          return <EntryCard key={entry.id}
            user={author}
            entry={entry} />
        }

        )}

      </div>
    </>
  )
}












{/* // entries.map(entry => {
        //   return <EntryCard key={entry.id} entry={entry} />
        // }) */}