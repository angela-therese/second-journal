import React from "react";
import "./User.css"

export const UserCard = ({ user }) => (

    <section className="user">
        <h4 className="user__title">{user.name}</h4>
    </section>

)