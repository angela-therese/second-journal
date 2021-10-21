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
        title:"",
        text:"",
        userId: null,
       
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
        /* entry is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEntry[event.target.id] = event.target.value
        // update state
        setEntry(newEntry)
    }


    const handleClickSaveEntry = (event) => {
        event.preventDefault()//I don't understand this

        const intUserId = parseInt(entry.userId)

        if (intUserId === 0) {
            window.alert("Please select an author.")
        }
        else {
            addEntry({
                title: entry.title,
                text: entry.text,
                user: parseInt(intUserId)
            })
            
                .then(() => history.push("/entries"))
        }
    }

    return (
        <form className="entryForm">
            <h2 className="entryForm__title">New entry</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter title" value={entry.title} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="user">Assign to author: </label>
                    <select name="userId" id="userId" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a user</option>
                        {users.map(u => (
                            <option key={u.id} value={u.id}>
                                {u.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="entry">Entry:</label>
                    <input type="text" id="text" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Type entry here" value={entry.text} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={handleClickSaveEntry}>
                Save Entry
            </button>

        </form>

    )




}

