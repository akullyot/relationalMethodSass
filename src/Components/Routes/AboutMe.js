
import headerVideo from '../../Assets/Videos/aboutMeVideo.mp4'
//Import reused components
import VideoSection from '../ReusedSections/VideoSection';


export default function AboutMe() {
  const videoInformation = {
    title: 'Ashley Ullyot, LMFT',
    subtitle: "I'M HERE TO HELP YOU MAKE SENSE OF THE COMPLEXITY OF RELATIONSHIPS WITHIN YOURSELF AND WITH OTHERS",
    description: 'In my therapy sessions, I strive to help my clients navigate the twists and turns of life to find fulfillment in themselves and their relationships',
    video: headerVideo
  }
  return (
    <div className="App">
      <VideoSection data ={videoInformation}/>
      </div>
    );
};
  