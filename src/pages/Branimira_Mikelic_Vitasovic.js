import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import 'react-multi-carousel/lib/styles.css';
import './card.css';
import './test.css';
//import { Waypoint } from 'react-waypoint'
import DrVitasovic from '../assets/img/team/DrVitasovic3.jpg'
import Header from '../components/HeaderCV'
import Layout from '../components/layout'


const Branimira = () => {
  return (
    <Layout>
        <Helmet title="Optimus Dental" >
        </Helmet>
        <Header/>
        <div class="holdit frank" style={{backgroundImage: `url(${DrVitasovic})`, 
        display: `block`, backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`}}>
          <div class="profile-spacer who-spacer" style={{height: `41px`}}></div>
          <div class="content-holder profiles meet">
          <h2>Upoznajte naš tim</h2>
          <p><b>Branimira Mikelić Vitasović</b>, specijalist ortodoncije</p>
          <p class="sub-copy">
          Mr. sc. Branimira Mikelić Vitasović rođena je 1979. godine u Splitu.
          <br/>
          <br/>
 Nakon završene osnovne glazbene škole i općeg osnovnog obrazovanja upisuje zdravstvenu školu farmaceutskog usmjerenja.
 Stomatološki fakultet u Zagrebu upisala 1997. god., bila demonstrator na Zavodu za stomatološku protetiku, apsolvirala u listopadu 2003. godine. 
 Iste godine upisuje poslijediplomski studij na Stomatološkom fakultetu u Zagrebu. Obavezni pripravnički staž obavila u Stomatološkoj poliklinici Split 2003/04 god. 
 Nakon polaganja državnog ispita zapošljava se na Stomatološkoj poliklinici na odjelu za pedodonciju. 
 Od travnja 2004. god. radi tri godine na projektu „Prevencija karijesa te promicanje oralnog zdravlja kod djece i mladeži s teškoćama u intelektualnom razvoju“.  
 U prosincu 2005. odlazi na specijalizaciju iz ortodoncije. 
 Magistrirala 2009. g. s temom „Stomatološko liječenje bolesnika u općoj anesteziji”. 
 Od 2009. do 2019. g. radi kao specijalist ortodoncije u Stomatološkoj poliklinici Split, te kao vanjski suradnik na Studiju dentalne medicine Medicinskog Fakulteta u Splitu. 
         <br/>
          <br/>


          <br/>
          <br/>
          Koautor je nekoliko znanstvenih radova i sudionik je brojnih stručnih konferencija  iz ortodoncije.
  
            
            <br/>
            <br/>
          </p>
        </div>
        </div>
    </Layout>
  )
}

export default Branimira
