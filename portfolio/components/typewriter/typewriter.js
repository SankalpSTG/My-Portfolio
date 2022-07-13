import React, {useState} from "react"
export default function Typewriter(props){
    var [text, updateText] = useState("")
    return <span></span>
}
function startTypewriter(text, fullText, updateText){
    if(text.length < fullText.length){
      var newText = text + fullText.charAt(text.length)
      updateText(newText)
      setTimeout(() => {
        this.startTypewriter(newText, fullText, updateText)
      }, 100)
    }
  }