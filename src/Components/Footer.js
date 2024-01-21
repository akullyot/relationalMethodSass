import logo from '../Assets/Images/Icons/relationMethodLogo.png'
import footerGraphic from '../Assets/Images/footerGraphic2.png'
import { Link }  from 'react-router-dom';


export default function Footer() {
    return (
        <div id='footer'>
            <ul id ="footerLinks">
                <li>
                    <h2> <i className="fa-solid fa-clock"></i>  Hours of Operation </h2>
                    <p> <span className = 'weekDay'>Monday</span> 10am to 7pm </p>
                    <p> <span className = 'weekDay'>Tuesday</span> 10am to 7pm</p>
                    <p><span className = 'weekDay'>Wednesday </span> 10am to 6pm </p>
                    <p><span className = 'weekDay'>Thursday </span> 10am to 7pm </p>
                </li>
                <li>
                    <h2> Contact </h2>
                </li>
                <li>
                    <h2> All Services </h2>

                </li>
            </ul>
            <div id='hrImageHolder'>
                <h3>Let's Cocreate a Lasting Method of Relating </h3>
                <img id='footerHrImage' src={footerGraphic} alt="line art of child on scooter"/> 
            </div>
            <hr/>
            <h5 id="footerNav"> Website design by: <a href="https://github.com/akullyot"> Annie Ullyot</a> </h5>
        </div>
    );
  };