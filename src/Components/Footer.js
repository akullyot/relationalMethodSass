import footerGraphic from '../Assets/Images/footerGraphic2.png'
import { HashLink } from 'react-router-hash-link'; 


export default function Footer() {
    return (
        <div id='footer'>
            <ul id ="footerLinks">
                <li>
                    <h2> <i className="fa-solid fa-clock"></i>  Hours of Operation </h2>
                    <div className='subLinks'>
                        <p> <div className = 'weekDay'>Monday</div> 10am to 7pm </p>
                        <p> <div className = 'weekDay'>Tuesday</div> 10am to 7pm</p>
                        <p><div className = 'weekDay'>Wednesday </div> 10am to 6pm </p>
                        <p><div className = 'weekDay'>Thursday </div> 10am to 7pm </p>
                        <p> <div className = 'weekDay'>Fri-Sun</div> Closed</p>
                        <br/>
                        <i className="fa-regular fa-dollar"></i>
                        <HashLink  to='/insurance/#'> Insurance and Rates</HashLink>
                    </div>
                </li>
                <li>
                    <h2> <i className="fa-solid fa-phone"></i>  Contact </h2>
                    <div className='subLinks'>
                        <p>  
                            <i className="fa-solid fa-person"></i>
                            Ashley Ullyot, LMFT (She, Her, Hers)
                        </p>
                        <p> 
                            <i className="fa-solid fa-envelope"></i>
                            <a href = "mailto: ashleyu@relationalmethod.com">ashleyu@relationalmethod.com</a>
                            
                        </p>
                        <p>
                            <i className="fa-solid fa-phone"></i> 
                            <a href="tel:708-918-4293">708-918-4293</a>
                            
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            <a href = "https://www.google.com/maps/place/4320+Winfield+Rd+%23200,+Warrenville,+IL+60555/@41.8086593,-88.1712397,17z/data=!3m1!4b1!4m6!3m5!1s0x880ef8a085b817d5:0x2012b028e05e3c2c!8m2!3d41.8086593!4d-88.1686648!16s%2Fg%2F11mbn88mhh?entry=ttu">  4320 Winfield Road, Suite 200 Warrenville, IL, 60555</a>
                        </p>
                        <p>
                            <i className="fa-brands fa-instagram"></i>
                            <a href = " https://www.instagram.com/relationalmethodpllc/"> Relational Method Instagram</a>
                        
                        </p>
                    </div>
                </li>
                <li>
                    <h2> <i className="fa-solid fa-hand-holding-heart"></i> All Services </h2>
                    <div className='subLinks'>
                        <p>
                            <i className="fa-solid fa-hand-holding-heart"></i>
                            <HashLink  to='/services'> Individual Therapy</HashLink>
                        </p>
                        <p>
                            <i className="fa-solid fa-child"></i>
                            <HashLink  to='/services'> Child and Adolescent Therapy</HashLink>
                        </p>
                        <p>
                            <i className="fa-solid fa-person"></i>
                            <HashLink  to='/services'> Adult Therapy</HashLink>
                        </p>
                        <p> 
                            <i className="fa-solid fa-hand-holding-hand"></i>
                            <HashLink  to='/services'> Couples Therapy</HashLink>
                        </p>
                        <p> 
                            <i className="fa-solid fa-people-group"></i>
                            <HashLink  to='/services'> Family Therapy</HashLink>
                        </p>
                    </div>

                </li>
            </ul>
            <div id='hrImageHolder'>
                <h3>Let's Cocreate a Lasting Method of Relating </h3>
                <img id='footerHrImage' src={footerGraphic} alt="line art of people reading"/> 
            </div>
            <hr/>
            <h5 id="footerNav"> Website design by: <a href="https://github.com/akullyot"> Annie Ullyot</a> </h5>
        </div>
    );
  };