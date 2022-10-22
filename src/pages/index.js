import { Link } from 'gatsby'
import React, {useState} from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carouselcss.css';
import './links.css'
//import { Waypoint } from 'react-waypoint'

import pic01 from '../assets/images/pic01.jpg'
import heartsvg from '../assets/svg/heart-o.svg'
import gl1 from '../assets/img/gallery/thumb/gl1.jpg'
import gl2 from '../assets/img/gallery/thumb/gl2.jpg'
import DrVitasovic from '../assets/img/team/DrVitasovic2.jpg'
import DrJerkovic from '../assets/img/team/DrJerkovic.jpg'
import DrTadin from '../assets/img/team/DrTadin2.jpg'
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

  
    const [showMore, setShowMore] = useState(false);
    return (
      <Layout>
        <Helmet title="Optimus Dental" >
        </Helmet>
        <Header />

        
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
                <b>Telefon: </b>
                    <a href="tel:021280169">(021) 280-169</a>
                </ul>
                <ul>
                <b>Email: </b> <a href="mailto:info@optimusdental.hr">info@optimusdental.hr</a>
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
                        <a href="https://goo.gl/maps/BXQSWx3cdAERrvP77">Poljicka 28a, Split</a>
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
                        
                        <h4>Protetika</h4>
                        <p>Stomatološka protetika temeljena je na jasno utvrđenim znanstvenim načelima te kliničkim iskustvima. 
                          Ona uključuje klinički i zubotehnički rad u konvencionalnoj i implato-protetskoj terapiji i rehabilitaciji djelomično ili potpuno bezubih pacijenata. 
                          Dentalna protetika uključuje fiksne i mobilne protetske radove. Fiksna protetika može nadomjestiti krunu zuba,
                           odnosno jedan ili više izgubljenih zuba i tako vratiti pacijentu  funkcionalnost, prirodan izgled i osjećaj ugode.
                          Imamo nekoliko vrsta fiksnoprotetskih radova poput krunica i mostova (metal keramičkih ili potpuno keramičkih), 
                          keramičkih ljuskica te fiksno protetskih radova na implantatima. Mobilna protetika bavi se vraćanjem i održavanjem normalne 
                          funkcije stomatognatog sustava kod potpuno bezubih ili djelomično bezubih  pacijenata.
                           Potpune ili djelomične proteze u potpunosti rehabilitiraju pacijenta i uspostavljaju narušenu funkciju i estetiku.
</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Endodoncija</h4>
                        <p>Endodoncija (grč. „endo“ – iznutra, grč. „odons“ – zub) je grana dentalne medicine koja se bavi dijagnostikom, liječenjem i prevencijom bolesti zubne pulpe i okolnih tkiva. Zubna pulpa je meko tkivo u središtu zuba okruženo caklinom i dentinom, a sadrži živce, krvne i limfne žile te vezivno tkivo.
Pulpno tkivo se može inficirati/oštetiti/upaliti kao posljedica karijesnih lezija, parodontne bolesti, traume zuba ili određenih zahvata na zubu. Endodontske infekcije, iako su često bezbolne, mogu se manifestirati bolovima u rasponu od blagih do nesnosnih. Bol može biti izazvana nizom čimbenika (vruća ili hladna temperatura prilikom konzumiranja hrane, pritisak na zub) ili biti spontana. Osim boli, na oštećenje pulpnog tkiva može upućivati promjena boje zuba, oteklina i pojava sinus trakta („fistule ili gnojnog prištića“) u visini korijena zuba.
Endodontska terapija sastoji se od uklanjanja oboljelog pulpnog tkiva, dezinfekcije pulpnog prostora i njegovog ispunjavanja zamjenskim materijalom. Primarni cilj endodontske terapije je što dulje sačuvati prirodni zub, a time i zaštititi pacijente od dugog procesa i visokih troškova nadomjeska zuba. Endodontski zahvati mogu biti bolni, ali primjena lokalnih anestetika ih čini bezbolnima. Većina endodontskih zahvata traje između jednog i dva sata, ovisno o opsegu oštećenja i broju zahvaćenih zuba. Ne zahtijevaju dugo vrijeme za oporavak, a većina pacijenata može nastaviti sa svojim normalnim aktivnostima odmah. Iako je normalno osjetiti određenu nelagodu nakon zahvata, ona je obično blaga i ne ometa normalne aktivnosti.
Stručnjak dentalne medicine koji je specijaliziran za ovo područje naziva se endodont. Da bi to postao, osim završiti stomatološki fakultet doktor dentalne medicine mora proći specijaliziranu edukaciju koja traje tri godine. U obavljanju svog posla, endodonti provode različite postupke liječenja, uključujući:
<br></br>· Endodontsku terapiju poznatiju kao liječenje korijenskog kanala
<br></br>· Endodontsko ponovno liječenje („revizija endodontskog liječenja“)
<br></br>· Liječenje traumatskih ozljeda zuba
<br></br>· Liječenje napuklih ili oštećenih zuba
<br></br>· Endodontsku kirurgiju
Za dodatne informacije o endodontskom postupku, uključujući smjernice za njegu nakon tretmana obratite se timu Optimus dentala.</p>
                    </div>
                </div>
            

                

                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Restaurativna stomatologija</h4>
                        <p>Restaurativna stomatologija je grana stomatologije koja se usredotočuje na nadomještanje oštećenih ili izgubljenih zuba. 
                Stomatolozi ove specijalizacije prvenstveno uklanjaju i popravljaju karijes i pružaju liječenje drugih oralnih stanja. 
                Također su specijalizirani za liječenje pacijenata kojima je potreban popravak zuba zbog traume ili ozljeda.</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Oralna kirurgija</h4>
                        <p>Oralna kirurgija stomatološka je grana koja se odnosi na kirurške zahvate na području naših usta i čeljusti. </p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Ortodoncija</h4>
                        <p>Nepravilnosti zubi i čeljusti moguće je ispraviti u svakoj životnoj dobi. 
                          Najnoviji podaci pokazuju da čak 50 % ortodontskih pacijenata čine odrasli. 
                          Odrasli su pacijenti savjesni, visoko motivirani i ako ortodont, 
                          slušajući njihove želje uz uvažavanje svih pravila struke, 
                          postavi jasan i realan plan terapije, postižu izvrsne rezultate.
                          
                          Dobna granica za ortodontsku terapiju ne postoji. 
                          Mehanika pomaka zuba jednaka je kod odraslih i kod djece.
                          Neovisno o dobi ortodontskom terapijom možemo ispraviti isturene 
                          i uvučene zube, otvaranjem prostora poravnati zube izrasle izvan zubnog luka, 
                          možemo podići zagriz, zatvoriti razmake nastale vađenjem zubi u ranijoj dobi i tako ukloniti 
                          potrebu za mostovima ili implantatima. Naprave kojima to radimo jesu fiksni ortodontski aparat i aligneri.</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Dječja i preventivna stomatologija</h4>
                        <p>Dječja stomatologija je grana stomatologije koja se bavi oralnim zdravljem djece od rođenja do adolescencije.</p>
                        <p>Što raniji posjeti dječjem stomatologu (pedodontu) ključni su za održavanje oralnog zdravlja i promjenu nenormalnih navika.
                          Roditelji bivaju savjetovani o načinu oralne higijene (četkanje, čišćenje zubnim koncem i fluoridima), procjenjuje se rizik od karijesa,
                          daju informacije o navikama sisanja palca i dude​​ i daju savjeti o sprječavanju ozljeda usta i zuba djece, prehrani, te informacije o rastu i razvoju.</p> 
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
  dotListClass="custom-dot-list-style"
  partialVisible={false}
  //itemClass="carousel-item-padding-40-px"
>


  <div>
  <Link to="/Antonija_Tadin"><img src={DrTadin} alt="Antonija Tadin"/></Link>
  <div class="csl-container">
    <h4><b>Izv. prof. dr. sc. Antonija Tadin</b></h4>
    <p>Specijalist endodoncije i restorativne stomatologije</p>
    <p></p>
  </div>
  </div>

  <div>
  <Link to="/Branimira_Mikelic_Vitasovic"><img src={DrVitasovic} alt="Branimira Mikelić Vitasović"/></Link>
  <div class="csl-container">
    <h4><b>Mr. sc. Branimira Mikelić Vitasović</b></h4>
    <p>Specijalist ortodoncije</p>
    <p></p>
  </div>
  </div>
  
  
  
  
  <div>
  <Link to="/Ivan_Kovacic"><img src={DrKovacic} alt="Ivan Kovačić"/></Link>
  <div class="csl-container">
  <h4><b>Izv. prof. dr. sc. Ivan Kovacic</b></h4>
    <p>Specijalist protetike</p>
    <p></p>
  </div>
  </div>

                
  <div>
  <Link to="/Daniel_Jerkovic"><img src={DrJerkovic} alt="Daniel Jerković"/></Link> 
  <div class="csl-container">
  <h4><b>Doc. dr. sc. Daniel Jerkovic</b></h4>
    <p>Specijalist kirurgije</p>
    <p></p>
  </div>
  </div>

  <div><img src={Doris} alt="Doris"/>
                <h4><b>Doris Jadrijević Tomas</b></h4>
                <p>Dentalni asistent</p>
                </div>
  <div><img src={Korina} alt="Korina"/>
                <h4><b>Korina Matulić</b></h4>
                <p>Dentalni asistent - pripravnik</p>
                </div>
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

