import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/img/logo-transparent.png';

const Footer = props => (

    <footer id = "footer">


        <section id="footer">
            <div class="four-shade-col">

                <div class="col-sm-4">
                <img src={logo}
                alt = "Optimus Dental"
                class = "footer-logo"
                width = "300"
                height = "100"/>
                </div> 
                
                
                <div class="col-sm-4">
                <h3> Optimus Dental </h3>
                    <b>Optimus Dental d.o.o.</b> <br/> <br/>
                    <b> Adresa: </b> Poljička cesta 28a, Split<br/><br/> 
                    <b> Telefon ordinacije: </b> +385 (0)21 280 910<br/><br/> 
                    <b> Radno vrijeme: </b><br/>
                    od Pon– Pet. 12:00h – 20:00h <br/>
                </div>

                
                <div class="col-sm-4">
                <h3> Podaci o tvrtki </h3>
                    <b>OIB:</b> 79846894337 <b> MBS: </b> 060399772<br/>
                    Trgovački sud u Splitu <br/>
                    <b> Članovi uprave: </b> Branimira Mikelić Vitasović, Antonija Tadin, Ivan Kovačić<br/> 
                    <b> Temeljni kapital: </b> 20 000,00kn uplaćen u cjelosti<br/><br/>
                    <b> Poslovni račun: </b><br/> 
                    <b> PRIVREDNA BANKA ZAGREB d.d. </b><br/> 
                    <b> IBAN: </b> HR2723400091111002629<br/><br/>
                </div>
                
                
                <div class="col-sm-4"> 
                <h3></h3> 
                Svim našim pacijentima nudimo brojne popuste kao i više mogućnosti plaćanja prilikom posjeta Optimus Dentalu. <br/> <br/>
                Primamo <b> Visa </b>, <b> Mastercard </b> i <b> American Express </b>  kartice. Za korisnike s Premium Visa karticama nudi se obročna otplata bez kamata i naknada.   
                </div>
        
            </div>
    </section>

    </footer>
)
export default Footer