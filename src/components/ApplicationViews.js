import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EntryProvider } from "./entry/EntryProvider"
import { EntryList } from "./entry/EntryList"
import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"




export const ApplicationViews = () => {
    return (
        <>
            {/* Render the homepage when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the Entry list when http://localhost:3000/entries */}
            <EntryProvider>
               <UserProvider>
                <Route exact path="/entries">
                    <EntryList />
                </Route>
                </UserProvider>
            </EntryProvider>

            <UserProvider>
                <Route exact path="/users">
                    <UserList />
                </Route>
            </UserProvider>

        </>
    )
}
