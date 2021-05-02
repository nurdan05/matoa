import React from 'react'
import bankCardImage1 from './../../assets/bankcard1.svg'
import bankCardImage2 from './../../assets/bankcard2.svg'
import bankCardImage3 from './../../assets/bankcard3.svg'
import bankCardImage4 from './../../assets/bankcard4.svg'
import bankCardImage5 from './../../assets/bankcard5.svg'
import bankCardImage6 from './../../assets/bankcard6.svg'
import bankCardImage7 from './../../assets/bankcard7.svg'
import bankCardImage8 from './../../assets/bankcard8.svg'
import bankCardImage9 from './../../assets/bankcard9.svg'
import bankCardImage10 from './../../assets/bankcard10.svg'
import footerLogo from './../../assets/footer-logo.png'
import FacebookIcon from './../../assets/Facebook.svg'
import InstagramIcon from './../../assets/Instagram.svg'
import TwitterIcon from './../../assets/Twitter.svg'
import YoutubeIcon from './../../assets/Youtube.svg'

import './style.scss'
function Footer() {
    return (
        <footer>
    <div className="footer__top">
    <div className="container">   
    <div className="footer__bankcard">
        <div className="footer__bankcard-item">
            <img className="footer__top-image" src={bankCardImage1} alt="bankCardImage1" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage2} alt="bankCardImage2" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage3} alt="bankCardImage3" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage4} alt="bankCardImage4" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage5} alt="bankCardImage5" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage6} alt="bankCardImage6" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage7} alt="bankCardImage7" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage8} alt="bankCardImage8" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage9} alt="bankCardImage9" />
        </div>
        <div className="footer__bankcard-item">
        <img className="footer__top-image" src={bankCardImage10} alt="bankCardImage10" />
        </div>
    </div>
    </div>
    </div>
    <div className="footer__bottom">
         <div className="container">
             <div className="row footer__row">
                 <div className="col-3 ">
                     <div className="foter__logo"><img src={footerLogo} alt="" /></div>
                     <div className="footer__addressname">Address</div>
                      <div className="footer__address">Store & Office
                        Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung, Jawa Barat, Indonesia 40152</div>
                        <div className="footer__officeHour">Office Hour</div>
                        <div className="footer__hour">Monday - Sunday
                            10.00 - 18.00</div>
                 </div>
                 <div className="col-3">
                     <div className="footer__title">Get in touch</div>
                     <div className="footer__inner">
                         <div className="footer__phonesuptitle">Phone</div>
                         <div className="footer__phonenumber">
                            <a href="tel:02220277564">022-20277564</a>
                         </div>
                     </div>
                     <div className="footer__inner">
                         <div className="footer__phonesuptitle">Service Center</div>
                         <div className="footer__phonenumber">
                            <a href="tel:02220277564">0811-233-8899</a>
                         </div>
                     </div>
                     <div className="footer__inner">
                         <div className="footer__phonesuptitle">Customer Service</div>
                         <div className="footer__phonenumber">
                            <a href="tel:02220277564">0811-235-9988</a>
                         </div>
                     </div>
                     <ul className="footer__socials">
                         <li className="footer__icon"><a href="#"><img src={FacebookIcon} alt="" /></a></li>
                         <li className="footer__icon"><a href="#"><img src={InstagramIcon} alt="" /></a></li>
                         <li className="footer__icon"><a href="#"><img src={TwitterIcon} alt="" /></a></li>
                         <li className="footer__icon"><a href="#"><img src={YoutubeIcon} alt=""/></a></li>
                     </ul>
                 </div>
                 <div className="col-3">
                    <div className="footer__title">Useful Link</div>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link"> Warranty & Complaints</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Order & Shipping</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Tracking Order</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">About Us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Repair</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">FAQ</a></li>
                    </ul>
                 </div>
                 <div className="col-3">
                    <div className="footer__title">Campaign</div>
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Mengenal Arti Cukup</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Tell Your Difference</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Waykambas</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Rebrand</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Gallery</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Singo</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Rakai</a></li>
                    </ul>
                 </div>
             </div>
         </div>
    </div>
</footer>
    )
}

export default Footer
