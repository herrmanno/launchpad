import * as React from "react"
import {Component} from "react"
import {Link} from "react-router"

export class Navbar extends Component<void, void> {
    
    render() {
        return (
            <section>
                <Link to="/">Home</Link>
                <Link to="/App1">App1</Link>
                <Link to="/app2">App2</Link>
            </section>
        );
    }
}