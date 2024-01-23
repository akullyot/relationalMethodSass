//Import in all required hooks and dependencies

//Import in all media
import headerVideo from '../../Assets/Videos/servicesPageLandingVideo.mp4'
//Import reused components
import VideoSection from '../ReusedSections/VideoSection';



export default function Services() {
  const videoInformation = {
    title: 'RELATIONAL METHOD',
    subtitle: 'Cocreating a path to relating, one session at a time ',
    description: 'Offering therapeutic services for individuals, couples, and families via in person or telehealth appointments',
    video: headerVideo
  }

  return (
    <div className="App">
      <VideoSection data ={videoInformation}/>

    </div>
  );
};
  