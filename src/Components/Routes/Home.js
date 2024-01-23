//Add in all Hooks and dependencies
//import { NavLink, Link}      from 'react-router-dom';
//Import all used media
import headerVideo from '../../Assets/Videos/homeVideoHeader.mp4'
//Import reused components
import VideoSection from '../ReusedSections/VideoSection';

export default function Home() {
    const videoInformation = {
      title: 'RELATIONAL METHOD',
      subtitle: 'READY TO FIND YOUR NEW METHOD OF RELATING? ',
      description: 'Offering both in-person and online therapy to individuals, couples, and families residing in Warrenville and surrounding Illinois areas',
      video: headerVideo
    }
    return (
      <div className="App">
        <VideoSection data ={videoInformation}/>
      </div>
    );
  };
  