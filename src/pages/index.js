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

import Header from '../components/Header'
import Layout from '../components/layout'
//import Nav from '../components/Nav'
//import GoogleMap from '../components/GoogleMaps'
import Maps from '../components/Maps'
import Footer from '../components/Footer'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Index = ({ data }) => {
    const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
    // `images` is an array of objects with `thumb` and `full`

  
/*
  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }
*/

    return (
      <Layout>
        <Helmet title="Optimus Dental" >
        </Helmet>
        <Header />
{/*
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />
 */}
        
          <section id="form" className="main">

            <div class="hero-image">
              <div class="hero-content">
                  <div class="container-fluid">
                      <div class="hero-content-inner">
                          <h1>Optimus Dental</h1>
                          <p>Najbolje rješenje za Vaš osmijeh</p>
                      </div>
                  </div>
                </div>

                <div class="container-fluid">
                <div class="col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-8 form">
                        <h3><svg class="icon icon-envelope-o"></svg>Zakažite termin</h3>   
                <form action="https://getform.io/f/5467939a-4424-4f96-92d7-25aefb262eb4" method="POST">
                        <div class="form-field">
                            <input name="name" type="text" placeholder="Ime i prezime" required />
                            </div>
                            <div class="form-field">
                                <input name="phone" type="tel" placeholder="Telefon" required />
                            </div>
                            <div class="form-field">
                                <input name="email" type="email" placeholder="Email" required />
                            </div>
                            <div class="form-field">
                                <textarea name="comments" placeholder="Poruka" required></textarea>
                            </div>
                            <input type="submit" class="btn btn-default" value="Pošalji" />
                </form>
                                    </div>
                                    </div>


            </div>
          </section>

          <section id="3 columns">
          <div class="three-shade-col">
            <div class="col-sm-4">
                <svg class="icon icon-envelope-o"></svg>
                <h3>Kontaktirajte nas</h3>


                <ul>
                 
                      <a href="tel:021280169">Zovi (021)280-169</a>
                </ul>
                <ul>
                  Email
                </ul>
            </div>
            <div class="col-sm-4">
                <svg class="icon icon-clock-o"></svg>
                <h3>Radno vrijeme</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Ponedjeljak – Petak</td>
                            <td>12-20h</td>
                        </tr>
                        <tr>
                            <td>Subota</td>
                            <td>Ne radimo</td>
                        </tr>
                        <tr>
                            <td>Nedjelja</td>
                            <td>Ne radimo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-4">
                <svg class="icon icon-map-marker"></svg>
                <h3>Lokacija</h3>
                    <p>
                        Poljicka 28a, Split
                    </p>
            </div>
          </div>
      </section>
      
      <section id="treatments">

    <div id="treatments" class="treatments">
    <div class="container-fluid">
        <h2 class="section-title">Usluge</h2>

        <div class="row">
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        
                        <h4>Invisible braces</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Cosmetic Dentistry</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Stain removal</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Dentures</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Emergency Calls</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Sedation</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
        </div>
    </div>
</div>
</section>


  <section id="team">

<Carousel
  itemClass="carouselItem"
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={false}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  partialVisible={false}
  //itemClass="carousel-item-padding-40-px"
>


  <div>
  <Link to="/Antonija"><img src={DrTadin} alt="Antonija Tadin"/></Link>
  <div class="csl-container">
    <h4><b>Antonija Tadin</b></h4>
    <p>Specijalist endodoncije i restorativne stomatologije</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sem non libero elementum porta vehicula a leo. Maecenas id rhoncus risus.</p>
  </div>
  </div>
  
  
  
  
                
  <div><img src={DrVitasovic} alt="Branimira Mikelić Vitasović"/>
                <h4>Branimira Mikelić Vitasović</h4></div>
  <div><img src={DrKovacic} alt="Ivan Kovacic"/>
                <h4>Ivan Kovacic</h4></div>
  <div><img src={DrJerkovic} alt="Daniel Jerković"/>
                <h4>Daniel Jerković</h4></div>
  <div><img src={Doris} alt="Doris"/>
                <h4>Doris Jadrijević</h4></div>
  <div><img src={Korina} alt="Korina"/>
                <h4>Korina Matulić
                  
                  
                  
                  
                  
                  
                  
                  </h4></div>
</Carousel>
        
      </section>
        
    
        
    
      <section id="gallery">
    

        <h2 class="section-title">Galerija</h2>
    
        <Gallery images={images} />
         
    
    </section>

      <section id="location" className="main special">
        <Maps />
      </section>
      
    

      <Footer />
      
</Layout>
    )
  }

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 200
              placeholder: DOMINANT_COLOR
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  `


export default Index

