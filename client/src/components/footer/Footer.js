import React from 'react'
import "./footer.scss"
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <div className='footer'>
      <div className='f-footer-lg'>
        <div className='f-btn-div' >
            <Link to="/" >
            <img className='logo' src={logo} alt='' />
            </Link>
            <span className='f-header'>Coming soon to your app store</span>
            <div className='f-b-btn-div' >
                <button className='f-b-btn f-b-btn-div' >
                    <AppleIcon />
                    <div>
                        App Store
                    </div>
                </button>
                <button className='f-b-btn f-b-btn-div' >
                    <GoogleIcon />
                    <div>
                      Google Play
                    </div>
                </button>
            </div>
        </div>
        <div className='f-features-div'>

            <div className="f-table" >
                <div>
                <span className='f-header'>Help</span>
                </div>

                <div className="f-table-content">
                    <span className="f-table-span" ><Link to="/contact-us" >Contact us</Link></span>
                    <span className="f-table-span" ><Link to="/terms">Terms & Conditions</Link></span>
                    <span className="f-table-span" ><Link to="/insight">Insight</Link></span>


                </div>
            </div>

            <div className="f-table" >
                <div>
                <span className='f-header'>Market</span>
                </div>
                <div className="f-table-content">
                    <span className="f-table-span" ><Link to="/stock" >Stock trading</Link></span>
                    <span className="f-table-span" ><Link to="/futures" >Futures trading</Link></span>
                    <span className="f-table-span" ><Link to="/commodites" >Commodites trading</Link></span>
                    <span className="f-table-span" ><Link to="/forex" >Forex trading</Link></span>
                    
                </div>
            </div>
            <div className="f-table" >
                <div>
                <span className='f-header'>Services</span>
                </div>
                <div className="f-table-content">
                <span className="f-table-span" ><Link to="/insight" >Insight</Link></span>
                <span className="f-table-span" ><Link to="/" >Trading plartform</Link></span>
                <span className="f-table-span" ><Link to="/insight" >Analysis</Link></span>
                <span className="f-table-span" ><Link to="/insight" >Forcast</Link></span>
                    
                </div>
            </div>


            <div>

            </div>
        </div>
        <div className='f-contact ' >
            <span className='f-header'>SIGN UP FOR UPDATES</span>
            <div >
            <div className='input-div' >
                <input placeholder='Enter Email Address' ></input>
                <button><ArrowForwardIosIcon /></button>
            </div>
            <span className='f-table-span' >By signing up for email, you agree to Bulltrade Terms of Service and Privacy Policy.</span>
            </div>
            <div style={{display: "flex", gap: "10px"}} >
                <InstagramIcon className='f-icon' />
                <YouTubeIcon className='f-icon' />
                <FacebookIcon className='f-icon' />
                <LinkedInIcon className='f-icon' />
                <TelegramIcon className='f-icon' />
            </div>
        </div>
      </div>

      <div className='f-foooter-sm d-lg-none' >
        <div className='f-col' >
        <div className='f-btn-div' >
        <Link to="/" >
            <img className='logo' src={logo} alt='' />
        </Link>

            <span className='f-header'>Coming soon to your app store</span>
            <div className='f-b-btn-div' >
                <button className='f-b-btn f-b-btn-div' >
                    <AppleIcon />
                    <div>
                        App Store
                    </div>
                </button>
                <button className='f-b-btn f-b-btn-div' >
                    <GoogleIcon />
                    <div>
                      Google Play
                    </div>
                </button>
            </div>
        </div>
        
        <div className="f-table" >
                <div>
                <span className='f-header'>Help</span>
                </div>

                <div className="f-table-content">
                <span className="f-table-span" ><Link to="/about-us" >About us</Link></span>
                    <span className="f-table-span" ><Link to="/contact-us" >Contact us</Link></span>
                    <span className="f-table-span" ><Link to="/terms">Terms & Conditions</Link></span>
                    <span className="f-table-span" ><Link to="/insight">Insight</Link></span>
                    <span className="f-table-span" ><Link to="/faq">FAQs</Link></span>

                </div>
            </div>

        </div>
        <div style={{display: "flex", justifyContent: "space-between"}} >
        <div className="f-table" >
                <div>
                <span className='f-header'>Market</span>
                </div>
                <div className="f-table-content coll" >
                    <span className="f-table-span" ><Link to="/stock" >Stock trading</Link></span>
                    <span className="f-table-span" ><Link to="/futures" >Futures trading</Link></span>
                    <span className="f-table-span" ><Link to="/commodites" >Commodites trading</Link></span>
                    <span className="f-table-span" ><Link to="/forex" >Forex trading</Link></span>

                    
                </div>
            </div>
            <div className="f-table" >
                <div>
                <span className='f-header'>Services</span>
                </div>
                <div className="f-table-content coll">
                <span className="f-table-span" ><Link to="/insight" >Insight</Link></span>
                <span className="f-table-span" ><Link to="/" >Trading plartform</Link></span>
                <span className="f-table-span" ><Link to="/insight" >Analysis</Link></span>
                <span className="f-table-span" ><Link to="/insight" >Forcast</Link></span>

                </div>
            </div>

        </div>
                <div style={{display: "flex", justifyContent: "space-between"}} >
        <div className="f-table" >
                <div>
                <span className='f-header'>Company</span>
                </div>
                <div className="f-table-content coll ">
                <span className="f-table-span" ><Link to="" >Options copy trading</Link></span>
                <span className="f-table-span" ><Link to="" >Advanced trading account above PDT</Link></span>
                <span className="f-table-span" ><Link to="" >Live trading service</Link></span>    
                </div>
            </div>
        </div>
        <div style={{display: "flex", gap: "10px"}} >
                <InstagramIcon className='f-icon' />
                <YouTubeIcon className='f-icon' />
                <FacebookIcon className='f-icon' />
                <LinkedInIcon className='f-icon' />
                <TelegramIcon className='f-icon' />
            </div>

      </div>

      <div style={{display: "flex", flexDirection: "column", gap: "20px"}} >
        <span className='w-span' >Risk Warning: Trading may result in the loss of your entire capital. Trading OTC derivatives may not be suitable for everyone. Please consider our legal disclosure documents before using our services and ensure that you understand the risks involved. You do not own or have any interest in the underlying assets.</span>
        <span className='w-span' >Bulltrade does not issue advice, recommendations or opinion in relation to acquiring, holding or disposing of our products. All of our products are over-the-counter derivatives over global underlying assets. Bulltrade provides execution only service, acting as principal at all times.</span>
        <span className='w-span' >Bulltrade is a brand jointly used by multiple companies and it operates through the following companies:
              Bulltrade International Ltd is the issuer of the financial products that are described or available on this website. Bulltrade International Ltd is authorised and regulated by Mauritius Financial Services Commission (FSC) and the licence number is GB20025791. The registered office address is 6 St Denis Street, 1st Floor River Court, Port Louis 11328, Mauritius.
              Bulltrade Global Pty Ltd with ABN 90 149 011 361 holds an Australian Financial Services Licence (AFSL 398528).
              Bulltrade Holding is authorised and regulated by Cayman Islands Monetary Authority (CIMA) and the SIB licence number is 1612446.</span>
        <span className='w-span' >
        The information on this site is not intended for residents of the United States, Canada, Japan, New Zealand or use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. Please note that English is the main language used in our services and is also the legally effective language in all of our terms and agreements. Versions in other langauges are only for reference. In the event of any discrepancy between the English version and the other versions, the English version shall prevail.
        </span>
      </div>

      <div className='rights' >
        <div>
            <span className='f-r-span' >© {currentYear} Bulltrade, LLC All Rights Reserved Secured by SSL. </span>
        </div>
        <div className='r-a-div' >
            <a className='f-r-span' href=''>Legal & Privacy</a>
            <a className='f-r-span' href=''>Cookies</a>
        </div>
      </div>
    </div>
  )
}

export default Footer