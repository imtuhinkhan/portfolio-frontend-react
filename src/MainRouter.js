import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import App from "./App";
import Main from "./Components/Main";

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="*"><Main /></Route>
                </Switch>
            </div>
        );
    }
}

export default MainRouter;