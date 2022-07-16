import React from 'react'
import {Row, Col} from 'react-bootstrap'
import DefaultWrapper from '../common/wrappers/DefaultWrapper'
import HeavyPaddedContent from '../common/content/HeavyPaddedContent'
import homeCss from "../../styles/home.module.css"
import flexCss from "../../styles/flex.module.css"
import fontsCss from "../../styles/fonts.module.css"
import data from "../../constants/data.json"
import constants from "../../constants/constants.js"
import { VerticalSpacer } from '../common/content/Spacer'
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
                    <div className={`${homeCss.banner_text_content} ${fontsCss.header}`}>{this.state.introduction.header}</div>
                    <div className={`${homeCss.banner_text_content} ${fontsCss.content}`}>{this.state.introduction.subHeader}</div>
                    <div className={`${homeCss.banner_text_content} ${fontsCss.sub_content}`}>{this.state.introduction.subContext}</div>
                  </div>
                </div>
              </HeavyPaddedContent>
          </div>
        </div>
      </DefaultWrapper>
      <DefaultWrapper>
        <div className={homeCss.about_container}>
          <div className={homeCss.about_content}>
            <div className={homeCss.about_header}>ABOUT</div>
            <div className={homeCss.about_description}>{data['about-me'].description}</div>
          </div>
        </div>
      </DefaultWrapper>
      <DefaultWrapper>
        <div className={homeCss.experience_container}>
          {/* <img className={homeCss.experience_top_fragment} src={"/background_fragment_1.png"}/> */}
          <div className={homeCss.experience_content}>
          <VerticalSpacer height={90}/>
            <div className={homeCss.experience_header}>Work Experience</div>
            <VerticalSpacer height={90}/>
            <div>
              <div className={homeCss.experience_item}>
                <div className={homeCss.experience_item_company}>Crypso</div>
                <div className={homeCss.experience_item_role}>Android Developer</div>
                <div className={homeCss.experience_item_duration}>Time I spent there</div>
                <div className={homeCss.experience_item_brief}>Some shit that I did there</div>
              </div>
              <div className={homeCss.experience_item}>
                <div className={homeCss.experience_item_company}>Crypso</div>
                <div className={homeCss.experience_item_role}>Android Developer</div>
                <div className={homeCss.experience_item_duration}>Time I spent there</div>
                <div className={homeCss.experience_item_brief}>Some shit that I did there</div>
              </div>
            </div>
          </div>
        </div>
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
