import React, { useContext, useEffect } from "react"
import { EntryContext } from "./EntryProvider"
import { UserContext } from "../user/UserProvider"
import { EntryCard } from "./EntryCard"
import "./Entry.css"

export const EntryList = () => {
  // This state changes when `getEntries()` is invoked below
  const { entries, getEntries } = useContext(EntryContext)
  const { users, getUsers } = useContext(UserContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("AnimalList: useEffect - getAnimals")
    getEntries()
    .then(getUsers)

  }, [])


  return (
      <div className="entries">
           {entries.map(entry => {
        const author = users.find(user => user.id === entry.userId)

        return <EntryCard key={entry.id}
                          entry = {entry}
                          user = {author}/> }
    
       )}

      </div>
  )
}
    
       
    
    
       
  






  {/* // entries.map(entry => {
        //   return <EntryCard key={entry.id} entry={entry} />
        // }) */}