import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../user/UserProvider"
import { EntryContext } from "./EntryProvider"
import "./Entry.css"
import { useHistory } from 'react-router-dom';

export const EntryForm = () => {
    const { addEntry } = useContext(EntryContext)
    const { users, getUsers } = useContext(UserContext)


 /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

const [entry, setEntry] = useState({
    name: "",
    locationId: 0,
    customerId: 0
  });

  const history = useHistory();

      /*
    Reach out to the world and get users state.
    */
    useEffect(() => {
        getUsers()
      }, [])

     //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
     
      const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEntry = { ...entry }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEntry[event.target.id] = event.target.value
        // update state
        setEntry(newEntry)
      }


    //   START HERE WITH 
    //   const handleClickSaveEntry

}