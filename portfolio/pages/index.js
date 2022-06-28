import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import DefaultWrapper from '../components/common/wrappers/DefaultWrapper'
import homeCss from "../styles/home.module.css"
class Home extends React.Component{
  render(){
    return <DefaultWrapper>
      <DefaultWrapper>
        <h2>Introduction</h2>
        <p>
          My name is Sankalp Pol, I am from Navi Mumbai, currently working at Crypso.
          In past I have worked with Technodds LLP as a software developer.
          I have also worked as a freelancer with DAccess Software pune, Tophat Softwares Indore, and Guntier in new delhi.
          
        </p>
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
}

export default Home
