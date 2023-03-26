import React, { useContext } from 'react'
import Register from './register'
import { UserContext } from "./UserContext"

const Routes = () => {
    const { loggedinusername, id } = useContext(UserContext)
    if (loggedinusername) {
        return "logged in"
    }
    return (
        <>
            <Register />
        </>
    )
}

export default Routes