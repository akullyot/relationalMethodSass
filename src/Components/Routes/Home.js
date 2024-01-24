//Add in all Hooks and dependencies
import {Link}      from 'react-router-dom';
//Import all used media
import headerVideo from '../../Assets/Videos/homeVideoHeader.mp4'
import aduIcon     from  '../../Assets/Images/Icons/adultIcon.png'
import chiIcon     from  '../../Assets/Images/Icons/teenIcon.png'
import adoIcon     from  '../../Assets/Images/Icons/adultIcon.png'
import couIcon     from  '../../Assets/Images/Icons/coupleIcon.png'
import famIcon     from  '../../Assets/Images/Icons/familyIcon.png'
//Import reused components
import VideoSection from '../ReusedSections/VideoSection';

export default function Home() {
    const videoInformation = {
      title: 'RELATIONAL METHOD',
      subtitle: 'READY TO FIND YOUR NEW METHOD OF RELATING? ',
      description: 'Offering both in-person and online therapy to individuals, couples, and families residing in Warrenville and surrounding Illinois areas',
      video: headerVideo
    };
    //Mapping and applying the same services links lists
    const servicesLinksListData = [
        //Icon, Title, Description, Link Path
        {icon: aduIcon, title: "Adult Therapy",      description: 'For adults' , linkPath:'/services'},
        {icon: chiIcon, title: "Children's Therapy", description: 'For my child (ages 6-12)' , linkPath:'/services'},
        {icon: adoIcon, title: "Adolescent Therapy", description: 'For my teenager (ages 12-17)' , linkPath:'/services'},
        {icon: aduIcon, title: "Individual Therapy", description: 'For myself' , linkPath:'/services'},
        {icon: couIcon, title: "Couple's Therapy",   description: 'For my partner/s and me' , linkPath:'/services'},
        {icon: famIcon, title: "Family Therapy",     description: 'For my family and me' , linkPath:'/services'},
    ];
    const mappedLinksListData = servicesLinksListData.map( data => {
      return(
        <li>
          <Link to={data.linkPath} className= 'largeLinkCard'>
            <span className="iconTitle">
              <img className="icon" src={data.icon} data-aos="fade-right"/>
              <span> {data.title} </span>
            </span>
            <span className='description'>
              <h5> {data.description} </h5>
              <h4 className="hoverUnderline" data-aos="fade-right"> <i className="fa-solid fa-arrow-right"></i><span>  Learn more </span> </h4 >
            </span>
          </Link>
        </li>
      );
    });
    return (
      <div className="App">
        <VideoSection data ={videoInformation}/>
        <section id="homeServicesOfferedLinks">
          <h4 id="homeServicesOfferedLinksTitle"> All Services Provided:</h4>
          <ul id='homeServicesLinksList'>
            {mappedLinksListData}
          </ul>
        </section>
        <section> <h1>fjf</h1>
        <h1>fjf</h1>
        <h1>fjf</h1>
        </section>
      </div>
    );
  };
  