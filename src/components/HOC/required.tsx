import React from "react"
import { Redirect } from "react-router-dom"

export const Required = (Component: React.FC) => () => {

    let auth = localStorage.getItem("user") || false

    if (auth) {
        return <Component />
    }

    return <Redirect to="/" />
}