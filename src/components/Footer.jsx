import React from 'react'
import logos from "../assets/Fina.jpeg";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="logo"><img src={logos} alt="BPS Renewables Logo" className="h-20 " /></div>
          <p>BPS Renewables Pvt Ltd is a leading solar EPC company delivering reliable and cost-effective solar solutions across India.</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.017 0C8.396 0 7.994.014 6.802.067 5.618.12 4.902.26 4.28.509c-.66.26-1.22.61-1.78 1.17-.56.56-.91 1.12-1.17 1.78C.99 4.129.85 4.845.697 6.029.644 7.221.63 7.623.63 11.244s.014 4.023.067 5.215c.153 1.184.293 1.9.543 2.522.26.66.61 1.22 1.17 1.78.56.56 1.12.91 1.78 1.17.622.25 1.338.39 2.522.543 1.192.053 1.594.067 5.215.067s4.023-.014 5.215-.067c1.184-.153 1.9-.293 2.522-.543.66-.26 1.22-.61 1.78-1.17.56-.56.91-1.12 1.17-1.78.25-.622.39-1.338.543-2.522.053-1.192.067-1.594.067-5.215s-.014-4.023-.067-5.215c-.153-1.184-.293-1.9-.543-2.522-.26-.66-.61-1.22-1.17-1.78-.56-.56-1.12-.91-1.78-1.17C19.115.39 18.399.25 17.215.097 16.023.044 15.621.03 12 .03zm0 2.163c3.574 0 4.002.014 5.407.078 1.3.06 2.002.27 2.46.446.6.23 1.03.51 1.48.96.45.45.73.88.96 1.48.176.458.386 1.16.446 2.46.064 1.405.078 1.833.078 5.407s-.014 4.002-.078 5.407c-.06 1.3-.27 2.002-.446 2.46-.23.6-.51 1.03-.96 1.48-.45.45-.88.73-1.48.96-.458.176-1.16.386-2.46.446-1.405.064-1.833.078-5.407.078s-4.002-.014-5.407-.078c-1.3-.06-2.002-.27-2.46-.446-.6-.23-1.03-.51-1.48-.96-.45-.45-.73-.88-.96-1.48-.176-.458-.386-1.16-.446-2.46-.064-1.405-.078-1.833-.078-5.407s.014-4.002.078-5.407c.06-1.3.27-2.002.446-2.46.23-.6.51-1.03.96-1.48.45-.45.88-.73 1.48-.96.458-.176 1.16-.386 2.46-.446 1.405-.064 1.833-.078 5.407-.078zm0 3.96a6.08 6.08 0 1 0 0 12.16 6.08 6.08 0 0 0 0-12.16zm0 10.04a3.96 3.96 0 1 1 0-7.92 3.96 3.96 0 0 1 0 7.92zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#solar-epc">Solar EPC Solutions</a></li>
            <li><a href="#rooftop">Rooftop Solar</a></li>
            <li><a href="#net-metering">Net Metering & Approvals</a></li>
            <li><a href="#maintenance">Operations & Maintenance</a></li>
            <li><a href="#ground-mounted">Ground Mounted Plants</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
            </svg>
            <span>

              Plot No. RE-8, 1st Floor, JM Business Complex, IMT Industrial Area,Sector-69, Faridabad, Haryana 121004</span>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
            </svg>
            <span>+91-9015901566 | 7011800332</span>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
            </svg>
            <span>
              info@bpskiransolar.com</span>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
            </svg>
            <span>LandLine No : - 0129-4086317</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 BPS Renewables Pvt Ltd. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
