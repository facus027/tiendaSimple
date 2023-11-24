import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
1
const Foot = () => {
  return (
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="ms-4"><a class="text-body-secondary" href="https://www.facebook.com/people/Cotillon-San-Martin/100064042417602/?locale=pt_BR" target="_blank"><h3 width="54" height="54"><FaFacebook/></h3></a></li>
      <li class="ms-4"><a class="text-body-secondary" href="https://wa.me/5492634616444" target="_blank"><h3 width="54" height="54"><FaWhatsapp/></h3></a></li>
      <li class="ms-4"><a class="text-body-secondary" href="https://www.instagram.com/cotillon.sanmartin/" target="_blank"><h3 width="54" height="54"><FaInstagram/></h3></a></li>
      <li class="ms-4"><a class="text-body-secondary" href="https://www.instagram.com/cotillon.sanmartin/" target="_blank"><h3 width="54" height="54"> <FaTwitter/> </h3></a></li>
    </ul>
    <p class="text-center text-body-secondary">&copy; 2023 Cotillon San Martin, Inc</p>
  </footer>
  )
}

export default Foot

      