import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EntryProvider } from "./entry/EntryProvider"
import { EntryList } from "./entry/EntryList"
import { EntryCard } from "./entry/EntryCard"



export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the Entry list when http://localhost:3000/entries */}
            <EntryProvider>
                <Route exact path="/entries">
                    <EntryList />
                </Route>
            </EntryProvider>

        </>
    )
}
