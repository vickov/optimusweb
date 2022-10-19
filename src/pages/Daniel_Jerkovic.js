import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import 'react-multi-carousel/lib/styles.css';
import './card.css';
import './test.css';
//import { Waypoint } from 'react-waypoint'
import DrTadin from '../assets/img/team/DrJerkovic1.jpg'
import Header from '../components/HeaderCV'
import Layout from '../components/layout'


const Daniel = () => {
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
          <p><b>Daniel Jerkovicć</b>, specijalist oralne kirurgije</p>
          <p class="sub-copy">
          Daniel Jerković, doktor znanosti, specijalist oralne kirurgije, rođen je 1988. godine u Splitu. 
          Studij dentalne medicine, Medicinskog fakulteta, Sveučilišta u Splitu završava 2012. godine,
           nakon čega u listopadu 2015. godine započinje specijalizaciju iz oralne kirurgije na Klinici za kirurgiju lica, čeljusti i usta KB Dubrava Zagreb,
            koju završava 2019. godine. Nakon položenog specijalističkog ispita zapošljava se u KBC-u Split, Zavodu za maksilofacijalnu kirurgiju te u 
            siječnju 2020. godine postaje naslovni asistent na Katedri za oralnu kirurgiju, 
            Medicinskog fakulteta Sveučilišta u Splitu. 
            U ožujku 2021. godine je obranio doktorski rad iz polja biomedicine i zdravstva na temu: 
            Utjecaj peroralnog magezija na anesteziju i postoperativnu analgeziju kod operativnog uklanjanja donjeg trećeg molara 
            te time zadovoljio uvjete za postizanje akademskog naslova doktora znanosti. 
            <br/>
            <br/>
            Aktivno sudjeluje na brojnim domaćim i međunarodnim kongresima iz područja oralne kirurgije i dentalne implantologije,
             autor je i koautor brojnih članaka objavljenih u stranim i domaćim stručnim i znanstvenim časopisima. 
             Dobitnik je nagrade "Primarijus Mikolji“ za specijalizanta 2018. godine, u znak priznanja za najbolju prezentaciju rada XIII. 
             kongresa Hrvatskoga društva za maksilofacijalnu, plastičnu i rekonstrukcijsku kirurgiju glave i vrata i VII. kongresa Hrvatskoga 
             društva za oralnu kirurgiju u Splitu.  
            
            <br/>
            <br/>
          </p>
        </div>
        </div>
    </Layout>
  )
}

export default Daniel
