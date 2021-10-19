import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserCard } from "./UserCard"
import "./User.css"

export const UserList = () => {
  // This state changes when `getusers()` is invoked below
  const { users, getUsers } = useContext(UserContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getUsers()

  }, [])

// I don't understand line 21
  return (
    <div className="users">
      {
        users.map(user => {
          return <UserCard key={user.id} user={user} />
        })
      }
    </div>
  )
}
