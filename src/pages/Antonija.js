import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carouselcss.css';
//import { Waypoint } from 'react-waypoint'

import pic01 from '../assets/images/pic01.jpg'
import heartsvg from '../assets/svg/heart-o.svg'
import gl1 from '../assets/img/gallery/thumb/gl1.jpg'
import gl2 from '../assets/img/gallery/thumb/gl2.jpg'
import DrVitasovic from '../assets/img/team/DrVitasovic.jpg'
import DrJerkovic from '../assets/img/team/DrJerkovic.jpg'
import DrTadin from '../assets/img/team/DrTadin.jpg'
import DrKovacic from '../assets/img/team/DrKovacic.jpg'
import Doris from '../assets/img/team/Doris.jpg'
import Korina from '../assets/img/team/Korina.jpg'
//import pic02 from '../assets/img/hero.jpg'

import Header from '../components/HeaderCV'
import Layout from '../components/layout'
//import Nav from '../components/Nav'
//import GoogleMap from '../components/GoogleMaps'
import Maps from '../components/Maps'
import Footer from '../components/Footer'


const Antonija = () => {
  return (
    <Layout>
        <Helmet title="Optimus Dental" >
        </Helmet>
        <Header/>
        <img src={DrTadin} alt="Antonija Tadin"/>
    </Layout>
  )
}

export default Antonija
