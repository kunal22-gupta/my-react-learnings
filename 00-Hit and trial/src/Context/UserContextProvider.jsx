import { useState } from "react"
import UserContext from "./UserContext";

function UserContextProvider({children}) { // children are everything that is wrapped inside UserContextProvider

    // State to  store our context
    const [user, setUser] = useState(null);
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider