import * as React from "react"
import {Component} from "react"
import {Router, Route} from "react-router"
import {createHistory, useBasename} from "history"
import {App} from "./app"
import {Home} from "./home"
import {UserStore} from "./userstore"
import {Login} from "./login"


const history = useBasename(createHistory)({
  basename: document.getElementsByTagName("base")[0].getAttribute("href")
})

export class AppRouter extends Component<void, void> {
    
    getComponent(location, cb) {
        let component = location.params.component;
        System.import("/" + component + "/js/index.js")
        .then(Mod => {
            cb(null, Mod.default);
        });
        if(component === "app2") {
            cb(null, () => <h2>Dynamic content</h2>);
        }
    }
    
    onEnter(nextState: ReactRouter.RouterState, replace: ReactRouter.RedirectFunction) {
        if(!UserStore.user) {
            replace({
                pathname: "/login",
                state: nextState.location
            });
        }
    }
    
    render() {
        return (
            <Router history={history}>
                <Route component={App}>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} onEnter={this.onEnter.bind(this)} />
                    <Route path="/:component" getComponent={this.getComponent.bind(this)} onEnter={this.onEnter.bind(this)} />
                </Route>
            </Router>
        );
    }
}