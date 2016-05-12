import * as React from "react"
import {Component} from "react"
import {AppBar, RaisedButton} from "material-ui"

export class Home extends Component<void, void> {
    
    render() {
        return (
            <AppBar title="Launchpad Home">
                <RaisedButton secondary={true}>Hello</RaisedButton>
            </AppBar>
        );
    }
}