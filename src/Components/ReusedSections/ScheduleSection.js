//Import all hooks and dependencies
import { HashLink } from 'react-router-hash-link'; 




export default function ScheduleSection(){
    return(
        <section className='scheduleSection' data-aos="fade-in">
            <h2> Ready to Take on Creating a New Method of Relating? </h2>
            <h4> If Relational Method seems like a  good fit for you, your partner/s, or your family, please use the link below to schedule a free, 15 minute consultation.  I look forward to hear from you and thank you for considering Relational Method, PLLC </h4>
            <div className="buttonWrapper">
                    <HashLink to="/contact/#"> <i className="fa-regular fa-calendar"></i> Schedule a Consultation</HashLink>
            </div>
        </section>
    );
};