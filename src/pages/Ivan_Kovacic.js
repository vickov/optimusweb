import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import 'react-multi-carousel/lib/styles.css';
import './card.css';
import './test.css';
//import { Waypoint } from 'react-waypoint'
import DrTadin from '../assets/img/team/DrKovacic2.jpg'
import Header from '../components/HeaderCV'
import Layout from '../components/layout'


const Ivan = () => {
  return (
    <Layout>
        <Helmet title="Optimus Dental" >
        </Helmet>
        <Header/>
        <div class="holdit frank" style={{backgroundImage: `url(${DrTadin})`, 
        display: `block`, backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`}}>
          <div class="profile-spacer who-spacer" style={{height: `41px`}}></div>
          <div class="content-holder profiles meet">
          <h2>Upoznajte naš tim</h2>
          <p><b>Ivan Kovacic</b>, specijalist protetike</p>
          <p class="sub-copy">
          Ivan Kovačić rođen je u Splitu 25. travnja 1974. godine. 
          <br/>
          <br/>
          Osnovnu i srednju školu završio je u Omišu.
          Stomatološki fakultet Sveučilišta u Zagrebu upisuje 1992. godine na kojem je diplomirao u siječnju 1998. godine. 
          U lipnju 2001. godine obranio je magistarski rad iz područja stomatološke protetike na Stomatološkom fakultetu u Zagrebu. 
          U travnju 2004. godine  polaže specijalistički ispit i stječe zvanje specijalista stomatološke protetike.
          Doktorsku disertaciju iz grane stomatološke protetike obranio je na Stomatološkom fakultetu u Zagrebu 2006. Godine.
          <br/>
          <br/>
          
          2010. godine izabran je u zvanje docenta iz područja stomatološke protetike na Medicinskom fakultetu u Splitu.
          2014. godine izabran je u zvanje izvanrednog profesora  iz područja stomatološke protetike na Medicinskom fakultetu u Splitu.
          Nakon studija sudjelovao je na mnogim domaćim i međunarodnim konferencijama i seminarima. Autor je i suautor 30 znanstvena, pregledna i stručna rada od toga su 14 izvorna znanstvena rada citirana u CC bazi, a također i 1 znanstveni sažetak, te 1 izvorni znanstveni rad citiran u SCI bazi. Mentor je prve stomatološke doktorske disertacije obranjene na Medicinskom fakultetu u Splitu.  
          <br/>
          <br/>
          
          Osnovao je i organizirao Katedru za dentalnu protetiku kao prvu Katedru na Studiju dentalne medicine Medicinskog fakulteta u Splitu i bio njen prvi pročelnik.
          2019. godine stječe zvanje primarijusa.
          <br/>
          <br/>
          
          Član je Hrvatskog zbora liječnika, Hrvatske stomatološke komore, Hrvatskog društva za stomatološku protetiku.
  
            <br/>
            <br/>
          </p>
        </div>
        </div>
    </Layout>
  )
}

export default Ivan
