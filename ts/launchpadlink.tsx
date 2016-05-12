import * as React from "react"
import {Component} from "react"
import {Link} from "react-router"

export interface Props {
    app: string;
    path: string;
}

export class LaunchpadLink extends Component<Props,void> {
    
    context: any;
    
    static contextTypes = {
        launchpadRouter: Object
    };
    
    static childContextTypes = {
        router: Object
    }
    
    getChildContext() {
        let router = this.context.launchpadRouter;
        return {router};
    }
    
    render() {
        let to = this.props.app + "#" + this.props.path;
        return <Link to={to}>{this.props.children}</Link>;
    }
}