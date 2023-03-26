import { createContext, useState } from "react"

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
    const [loggedinusername, setloggedinusername] = useState(null)
    const [id, setid] = useState(null)
    return (
        <UserContext.Provider value={{ loggedinusername, setloggedinusername, id, setid }}>
            {children}
        </UserContext.Provider>
    )
}