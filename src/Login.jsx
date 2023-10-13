import { useContext, useState } from "react";
import UserContext from "./Context/UserContext";

function Login() {
    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    // Fetching the userContext state
    const {setUser} = useContext(UserContext);

    const handleChange = (e) => {
        const toChange = e.target.placeholder;
        setLoginInfo(currInfo => {
            return toChange === "username" ? {...currInfo, username: e.target.value} : {...currInfo, password: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(loginInfo)
    }
    
    return (
        <div>
            <h1>Login</h1>
            <input  type="text" placeholder="username" value={loginInfo.username} onChange={handleChange} />
            <input  type="password" placeholder="password" value={loginInfo.password} onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}
export default Login;
