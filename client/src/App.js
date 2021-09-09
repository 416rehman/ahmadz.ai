import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error404 from "./pages/error404/Error404";
import AuthService from "./services/auth.service.js"
import React, {Component} from "react";

export const UserContext = React.createContext()

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        AuthService.authenticate().then(()=>{
            this.setState({user: AuthService.getCurrentUser() || null})
        })
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <div id="page">
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route component={Error404}/>
                            </Switch>
                            <Route path="/dashboard" component={Dashboard}/>
                        </div>
                    </div>
                </Router>
            </UserContext.Provider>
        );
    }
}

export default App;
