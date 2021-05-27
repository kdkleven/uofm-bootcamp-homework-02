import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
//need to add icons

function Footer () {
    return (
        <footer class="footer contact">
            <span id="copyright" class="contact-c">10GU &copy;2021</span>
            <span> || </span>
            <span><Link href="mailto:kylekleven8@gmail.com" class="contact-l">kylekleven8@gmail.com</Link></span>
            <span> || </span>
            <span><Link href="tel:612-670-7837" class="contact-l">612-670-7837</Link></span>
            <span> || </span>
            <span><Link href="https://www.linkedin.com/in/kdkleven/" class="fa fa-linkedin contact-r"></Link></span>
            <span> || </span>
            <span><Link href="https://github.com/kdkleven" class="fa fa-github contact-r"></Link></span>
            <span> || </span>
            <Link href="" download="kk_resume">Resume</Link>
        </footer>
    )
}

export default Footer;