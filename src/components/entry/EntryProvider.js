import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EntryContext = createContext()

// This component establishes what data can be used.
export const EntryProvider = (props) => {
    const [entries, setEntries] = useState([])

    const getEntries = () => {
        return fetch("http://localhost:8088/entries")
        .then(res => res.json())
        .then(setEntries)
    }

    const addEntry = entryObj => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObj)
        })
        .then(getEntries)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.

        (Defines what this component will expose to other components)
    */
    return (
        <EntryContext.Provider value={{
           entries, getEntries, addEntry
        }}>
            {props.children}
        </EntryContext.Provider>
    )
}
