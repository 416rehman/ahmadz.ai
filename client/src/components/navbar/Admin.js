import {UserContext} from "../../App";
import {useContext} from "react";


function Admin() {
    const user = useContext(UserContext)
    return user?.id ?
        (<a href="/dashboard">
                <div id="admin">
                    Dashboard
                    <img src="/static/dashboard.svg" alt="Dashboard Logo"/>
                </div>
        </a>)
        :
        (<a href="/login">
                <div id="admin">
                    Login
                    <img src="/static/github.svg" alt="github Logo"/>
                </div>
        </a>)

}

export default Admin