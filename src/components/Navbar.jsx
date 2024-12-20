import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/6534601.jpg"
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className='mx-2 ' width={50} height={33} alt="" />
            </a>
        </div>


        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://github.com/iamabhays"
            target="_blank"
            rel="nonpener noreferre"
            aria-label="Github">
                   < FaGithub />
           </a>


           
    
            <a href="https://www.linkedin.com/in/iabhaysharma1/"
            target="_blank"
            rel="nonpener noreferre"
            aria-label="Linkedin">
                   < FaLinkedin />
           </a>

           <a href="https://www.linkedin.com/in/iabhaysharma1/"
            target="_blank"
            rel="nonpener noreferre"
            aria-label="Twitter">
                   < FaSquareXTwitter />
           </a>

           <a href="https://www.instagram.com/iabhaysharma01/"
            target="_blank"
            rel="nonpener noreferre"
            aria-label="Instagram">
                   < FaInstagram />
           </a>


           <a href="https://leetcode.com/u/imabhays/"
            target="_blank"
            rel="nonpener noreferre"
            aria-label="Leetcode">
                   <SiLeetcode />
           </a>


          


           
         

           
        </div>
    </nav>
  )
}

export default Navbar