import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EntryCard } from "./entry/EntryCard"



export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the Entry list when http://localhost:3000/entries */}
            <Route path="/entries">
                <EntryCard />
            </Route>
        </>
    )
}
