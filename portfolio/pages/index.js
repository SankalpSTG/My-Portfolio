import React from 'react'
import {Row, Col} from 'react-bootstrap'
import DefaultWrapper from '../components/common/wrappers/DefaultWrapper'
import HeavyPaddedContent from '../components/common/content/HeavyPaddedContent'
import homeCss from "../styles/home.module.css"
import flexCss from "../styles/flex.module.css"
import fontsCss from "../styles/fonts.module.css"
import data from "../constants/data.json"
import constants from "../constants/constants.js"
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      introduction: {
        header: "",
        subHeader: "",
        subContext: ""
      }
    }
  }
  componentDidMount() {
    this.startTypewriter()
  }
  render(){
    return <DefaultWrapper>
      <DefaultWrapper>
        <div className={`${homeCss.banner_container_background}`}>
          <div className={`${flexCss.container} ${flexCss.align_center} ${flexCss.vertically_middle} ${homeCss.banner_container}`}>
              <HeavyPaddedContent>
                <div className={`${flexCss.container} ${flexCss.align_center} ${flexCss.gap_24px}`}>
                  <div>
                    <p className={`${homeCss.banner_text_content} ${fontsCss.header}`}>{this.state.introduction.header}</p>
                    <p className={`${homeCss.banner_text_content} ${fontsCss.content}`}>{this.state.introduction.subHeader}</p>
                    <p className={`${homeCss.banner_text_content} ${fontsCss.sub_content}`}>{this.state.introduction.subContext}</p>
                  </div>
                </div>
              </HeavyPaddedContent>
          </div>
        </div>
      </DefaultWrapper>
      <DefaultWrapper>
        About
      </DefaultWrapper>
      <DefaultWrapper>
        Experience
      </DefaultWrapper>
      <DefaultWrapper>
        Micro Projects
      </DefaultWrapper>
      <DefaultWrapper>
        Education
      </DefaultWrapper>
      <DefaultWrapper>
        Contact Details
      </DefaultWrapper>
      <DefaultWrapper>
        Footer
      </DefaultWrapper>
    </DefaultWrapper>
  }
  startTypewriter(){
    console.log(constants.TYPEWRITER_TIME_MS)
    if(this.state.introduction.header.length < data.introduction.header.length){
      const newState = {...this.state}
      newState.introduction.header += data.introduction.header.charAt(this.state.introduction.header.length)
      this.setState(newState, () => {
        setTimeout(() => { 
          this.startTypewriter()
        }, constants.TYPEWRITER_TIME_MS)
      })
    }else if(this.state.introduction.subHeader.length < data.introduction["sub-header"].length){
      const newState = {...this.state}
      newState.introduction.subHeader += data.introduction["sub-header"].charAt(this.state.introduction.subHeader.length)
      this.setState(newState, () => {
        setTimeout(() => { 
          this.startTypewriter()
        }, constants.TYPEWRITER_TIME_MS)
      })
    }else if(this.state.introduction.subContext.length < data.introduction["sub-context"].length){
      const newState = {...this.state}
      newState.introduction.subContext += data.introduction["sub-context"].charAt(this.state.introduction.subContext.length)
      this.setState(newState, () => {
        setTimeout(() => { 
          this.startTypewriter()
        }, constants.TYPEWRITER_TIME_MS)
      })
    }
  }
}

export default Home
