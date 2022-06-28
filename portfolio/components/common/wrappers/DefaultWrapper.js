import React from "react"
import wrapperCss from "../../../styles/wrapper.module.css"

export default function DefaultWrapper(props){
    return <div className={wrapperCss.default}>
        {props.children}
    </div>
}