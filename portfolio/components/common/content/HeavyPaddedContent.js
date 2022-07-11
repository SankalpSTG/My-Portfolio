import React from "react"
import contentCss from "../../../styles/content.module.css"

export default function HeavyPaddedContent(props){
    return <div className={contentCss.heavy_padded}>
        {props.children}
    </div>
}