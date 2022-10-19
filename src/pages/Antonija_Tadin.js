import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import 'react-multi-carousel/lib/styles.css';
import './card.css';
import './test.css';
//import { Waypoint } from 'react-waypoint'
import DrTadin from '../assets/img/team/DrTadin3.jpg'
import Header from '../components/HeaderCV'
import Layout from '../components/layout'


const Antonija = () => {
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
          <p><b>Antonija Tadin</b>, specijalist endodoncije i restaurativne stomatologije</p>
          <p class="sub-copy">
          Izv. prof. dr. sc. Antonija Tadin rođena je 1978. godine u Splitu.
          <br/>
          <br/>
          Diplomirala je 2003. godine na Stomatološkom fakultetu Sveučilišta u Zagrebu, 
          gdje je 2007. i 2013. godine stekla akademske stupnjeve magistra i doktora znanosti. 
          Specijalistički ispit iz endodoncije s restaurativnom stomatologijom položila je 2012. godine.
          Između 2005. i 2009. godine radila je u Stomatološkoj poliklinici Split,
          a od 2009. godine zaposlenik je studija za Dentalnu medicinu, Medicinskog fakulteta Sveučilišta u Splitu.
          <br/>
          <br/>
          Voditelj je Katedre za restaurativnu dentalnu medicinu i endodonciju gdje aktivno sudjeluje u kliničkoj i pretkliničkoj nastavi. 
          Sudjeluje u nastavi na doktorskom i poslijediplomskom specijalističkom studiju Stomatološkog fakultetu u Zagrebu, 
          te predavanjima u okviru trajne izobrazbe stomatologa.
          <br/>
          <br/>
          Urednik je udžbenika „Prevencija u dentalnoj medicini“.
          Aktivno je sudjelovala na brojnim međunarodnim znanstvenim konferencijama te autor preko 100 stručnih, preglednih znanstvenih radova. 
          Članica je domaćih i inozemnih strukovnih organizacija. 
            
            <br/>
            <br/>
          </p>
        </div>
        </div>
    </Layout>
  )
}

export default Antonija
