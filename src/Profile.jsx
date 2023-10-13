import { useContext } from "react"
import UserContext from "./Context/UserContext"
function Profile() {
    const {user} = useContext(UserContext);
    return (
       <h3> {user ? `Namaste ${user.username}!` : `Please Login`}</h3>
    )
}

export default Profile