import * as React from "react"
import {render} from "react-dom"
import {AppRouter} from "./approuter"

const el = document.getElementById("app");
render(<AppRouter/>, el);