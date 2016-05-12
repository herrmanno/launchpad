import * as React from "react"
import {Component} from "react"
import {MuiThemeProvider, getMuiTheme} from "material-ui/styles"
import {amber100, deepPurple500} from 'material-ui/styles/colors';
import * as MaterialUI from "material-ui"

import {Navbar} from "./navbar"


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: amber100,
        accent1Color: deepPurple500
    }
});


export class App extends Component<void, void> {

    context: any;

    static contextTypes = {
        router: Object
    }

    static childContextTypes = {
        user: String,
        launchpadRouter: Object
    }

    getChildContext() {
        return {
            user: "Mister Foo Bar",
            launchpadRouter: this.context.router
        };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <main>
                    <Navbar/>
                    {this.props.children}
                </main>
            </MuiThemeProvider>
        );
    }
}