//Add in all Hooks and dependencies
import {Link}      from 'react-router-dom';
//Import all used media
import headerVideo from '../../Assets/Videos/homeVideoHeader.mp4';
import QuoteVideo  from  '../../Assets/Videos/homeVideoQuote.mp4';
import aduIcon     from  '../../Assets/Images/Icons/adultIcon.png'
import chiIcon     from  '../../Assets/Images/Icons/teenIcon.png'
import adoIcon     from  '../../Assets/Images/Icons/adultIcon.png'
import couIcon     from  '../../Assets/Images/Icons/coupleIcon.png'
import famIcon     from  '../../Assets/Images/Icons/familyIcon.png'

//Import reused components
import VideoSection    from '../ReusedSections/VideoSection';
import ImageCard       from '../ImageCard';
import ScheduleSection from '../ReusedSections/ScheduleSection'

export default function Home() {
    const quoteVideoInformation = {
      title: '',
      subtitle: `“BEING THE 'BEST YOU CAN BE' IS REALLY ONLY POSSIBLE WHEN YOU ARE DEEPLY CONNECTED TO ANOTHER. SPLENDID ISOLATION IS FOR PLANETS, NOT PEOPLE.”`,
      description: '~ Sue Johnson, Love Sense: The Revolutionary New Science of Romantic Relationships',
      video: QuoteVideo
    };
    const videoInformation = {
      title: 'RELATIONAL METHOD',
      subtitle: 'READY TO FIND YOUR NEW METHOD OF RELATING? ',
      description: 'Offering both in-person and online therapy to individuals, couples, and families residing in Warrenville and surrounding Illinois areas',
      video: headerVideo
    }
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
    //Mapping the about me quick Links
    //TODO get official images and write in placeholder
    //TODO link scrolling down
    const aboutMeImageCardData = [
      { image:'cardImage aboutMeFocusImg',  
        title:"Areas Of Focus:",
        description:"Including: Attachment Related Stressors, Anxiety, Depression, Adjustment Disorder, Trauma, Communication Stressors, Life Transitions, Relationship Stressors,LGBTQIA+, Kink/Sexual Diversity", 
        linkPath:"/aboutme", 
        cardDivId:"aboutMeFocusCard"},
      { image:'cardImage aboutMePhilosophyImg', 
        title:"Philosophy Behind My Approach:", 
        description:"I believe that each person is deserving of fulfillment in every relationship. To attain that, we need to recognize the complexity of relationships within ourselves and with others. My approach is viewing the relationships we have with others and ourselves as cycles. Some cycles can help us to go about our days and overcome stressful life events. Over time however, some cycles may no longer be serving us and lead to undesirable outcomes. Together we can modify these cycles to promote connection and a better understanding of oneself.",
        linkPath:"/aboutMe",
        cardDivId:"aboutMePhilosophyCard"},
      { image:'cardImage aboutMeApproachImg',
        title:"Clinical Approaches:",
        description:"Including: Attachment Based, Culturally Sensitive, Family Systems, Strength Based, Person Centered, Play Therapy, Trauma Informed, Narrative, Structural Family Therapy, Solution Focused Therapy, Experiential, Cognitive Behavioral Therapy, Feminist Based Models, Collaborative",
        linkPath:"/aboutMe",
        cardDivId:"aboutMeApproachCard"}
    ];
    const locationImageCardData = [
      { image:'cardImage locationTelehealthImage', 
        title:"Telehealth:", 
        description:"I'm proud to offer a safe and convenient option for getting behavioral health care at home. If this appeals to you, please click the link below to learn more.",
        linkPath:"/location",
        cardDivId:"locationTelehealthCard"},
      { image:'cardImage locationInPersonImage',
        title:"In-Person (Warrenville):",
        description:"In person appointments are available for couples, individuals, and families through my Warrenville office space. To learn more about the office space, please click the link below.",
        linkPath:"/location",
        cardDivId:"locationInPersonCard"}
    ];

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
          <div id='homeFounderInformationTextContainer' data-aos="fade-right">
            <h2>Words from the founder, Ashley Ullyot, LMFT</h2>
            <h3>  Do you find yourself facing challenges or emotional difficulties that are making it hard to relate to yourself and those you love? I'm here to listen and help create a relational method best suited for <i> you </i>.</h3>
            <div> 
              <h4>
                  <span className="tab"></span>
                  Relationships are complex. We have them within ourselves and with others. In some moments, we may feel connected, confident, and comfortable. Other times we may feel distant, unheard, and hurt.
              </h4> 
              <h4>
                  <span className="tab"></span>
                  Through creativity and warmth, I work to help my clients find their best method of relating. Whether the therapy is one-on-one, a family, or couple, I can help you work through roadblocks preventing you from reaching your goals and equilibrium.
              </h4>
              <h4>
                  <span className="tab"></span>
                  Together, we can find your method of re-creating the relational moments you desire most.
              </h4>
            </div>
            <div  className="buttonWrapper">
            <Link to="/aboutme"> <i className="fa-regular fa-plus"></i> Learn More About Me</Link>
          </div>
          </div>

        </section>
        <section id="homeAboutMeQuickLinks">
          <div className='sectionTitle'>
            <h4 id="homeAboutMeQuickLinksTitle"> About Me:</h4>
            <h5 id="homeAboutMeQuickLinksSubtitle" className='sectionSubtitle'>As a therapist, I value providing my clients with transparency and ample information about my methods and philosophy.</h5>
          </div>
          <ImageCard data= {aboutMeImageCardData}/>
        </section>
        <VideoSection data ={quoteVideoInformation}/>
        <section id="homeLocationQuickLinks">
        <div className='sectionTitle'>
            <h4 id="homeLocationQuickLinksTitle"> Location and Telehealth Information:</h4>
            <h5 id="homeLocationQuickLinksSubtitle" className='sectionSubtitle'> I am currently accepting individuals, couples, and families for either in-person or telehealth therapy sessions.</h5>
          </div>
          <ImageCard data= {locationImageCardData}/>
        </section>
        <ScheduleSection />
      </div>
    );
  };
  