import * as React from "react"
import {Component} from "react"
import {browserHistory as history} from "react-router"

import {UserStore} from "./userstore"

interface Props extends ReactRouter.RouterContextProps {
    
}

export class Login extends Component<Props, void> {
    
    static contextTypes = {
        router: Object
    }
    
    login() {
        let input = this.refs["user"] as HTMLInputElement;
        UserStore.user = input.value;
        let nextLocation = this.props.location.state || "/";
        this.props.history.replace(nextLocation);
    }
    
    render() {
        return (
            <section>
                <input ref="user" />
                <button onClick={this.login.bind(this)}>Login</button>
            </section>
        );
    }
}