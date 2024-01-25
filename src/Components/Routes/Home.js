//Add in all Hooks and dependencies
import {Link}      from 'react-router-dom';
//Import all used media
import headerVideo from '../../Assets/Videos/homeVideoHeader.mp4'
import aduIcon     from  '../../Assets/Images/Icons/adultIcon.png'
import chiIcon     from  '../../Assets/Images/Icons/teenIcon.png'
import adoIcon     from  '../../Assets/Images/Icons/adultIcon.png'
import couIcon     from  '../../Assets/Images/Icons/coupleIcon.png'
import famIcon     from  '../../Assets/Images/Icons/familyIcon.png'
import founderPic  from  '../../Assets/Images/ashleyPicRecent.jpg'
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
        {icon: chiIcon, title: "Adolescent Therapy", description: 'For my teenager (ages 12-17)' , linkPath:'/services'},
        {icon: aduIcon, title: "Individual Therapy", description: 'For myself' , linkPath:'/services'},
        {icon: couIcon, title: "Couple's Therapy",   description: 'For my partner/s and me' , linkPath:'/services'},
        {icon: famIcon, title: "Family Therapy",     description: 'For my family and me' , linkPath:'/services'},
    ];
    const mappedLinksListData = servicesLinksListData.map( (data,index) => {
      return(
        <li key={index}>
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
        <section id="homeFounderInformation"  data-aos="fade-up">
          <div id='homeFounderPicture'>
            <div className='framedImage'>
              <h2 className="frameNote">Ashley Ullyot <br/><span> Owner and Founder</span> </h2>
            </div>
          </div>
          <div id='homeFounderInformationTextContainer'>
            <h2>Words from the founder, Ashley Ullyot, LMFT</h2>
            <h3>  Do you find yourself facing challenges or emotional difficulties that are making it hard to relate to yourself and those you love? I'm here to listen and help create a relational method best suited for <i> you </i>.</h3>
            <div> 
              <h4>
                  <span class="tab"></span>
                  Relationships are complex. We have them within ourselves and with others. In some moments, we may feel connected, confident, and comfortable. Other times we may feel distant, unheard, and hurt.
              </h4> 
              <h4>
                  <span class="tab"></span>
                  Through creativity and warmth, I work to help my clients find their best method of relating. Whether the therapy is one-on-one, a family, or couple, I can help you work through roadblocks preventing you from reaching your goals and equilibrium.
              </h4>
              <h4>
                  <span class="tab"></span>
                  Together, we can find your method of re-creating the relational moments you desire most.
              </h4>
            </div>
            <div  className="buttonWrapper">
            <Link to="/aboutme"> <i className="fa-regular fa-plus"></i> Learn More About Me</Link>
          </div>
          </div>

        </section>
        <section> <h1>fjf</h1>
        <h1>fjf</h1>
        <h1>fjf</h1>
        </section>
      </div>
    );
  };
  