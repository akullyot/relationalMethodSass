//Import all required components
import ScheduleSection from '../ReusedSections/ScheduleSection'
//Import all bootstrap components
import Carousel from 'react-bootstrap/Carousel';
//Import in all required leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon                from 'leaflet/dist/images/marker-icon.png';
import iconShadow          from 'leaflet/dist/images/marker-shadow.png';
import L                   from 'leaflet';
//import all required media
import pic1       from '../../Assets/Images/office1.jpg'
import pic2       from '../../Assets/Images/office2.jpg';
import pic3       from '../../Assets/Images/office3.jpg';
import telehealth from '../../Assets/Images/telehealth.jpg'



export default function Location() {
  //Leaflet required information
      //Purpose: holds the lat/long of the office
      const position = [41.813430,-88.164620];
      let DefaultIcon = L.icon({
          iconUrl: icon,
          shadowUrl: iconShadow
      });
      
      L.Marker.prototype.options.icon = DefaultIcon;
    return (
      <div className="App">
          <div className='heroSlider'>
            <div className='heroHeader'>
                      <h5>Relational Method Office</h5>
                      <p>
                          4320 Winfield Rd Suite 200 Warrenville, IL, 60555
                      </p>
              </div>
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic1}
                    alt="warrenville office space"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {pic2}
                    alt="Warrenville office space"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Warrenville Office Space"
                    />
                </Carousel.Item>
                </Carousel>
          </div>
          <div id="inPersonInfo" className='imageTextSection'  data-aos="fade-up">
              <MapContainer id ="mapHolder" center={position} zoom={14} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        Relational Method Office <br/> 4320 Winfield Rd Suite 200 Warrenville, IL, 60555
                    </Popup>
                    </Marker>
              </MapContainer>
              <div id="imageTextSectionText"  data-aos="fade-right">
                  <h2> In-Person </h2>
                  <h3>4320 Winfield Rd Suite 200 Warrenville, IL, 60555</h3>
                  <h4> 
                    There is no one-size-fits-all approach to therapy. If you are one that prefers face to face communication, or desire a neutral location to explore your thoughts and feelings, an in-person approach may be suitable. My office is equipped with multiple, comfortable seating options, ample privacy, and resources for children's play-based interventions. In person appointments are available for couples, individuals, and families through my Warrenville office space.  
                  </h4>
              </div>
          </div>
          <div id="telehealthInfo" className='imageTextSection' data-aos="fade-up">
              <div>
                  <img id="telehealthImage" src={telehealth}></img>
              </div>
              <div id="imageTextSectionText"  data-aos="fade-right">
                  <h2> Telehealth </h2>
                  <h3>Illinois residents only</h3>
                  <h4>
                     I offer Telehealth services for individuals, couples, and families across the state of Illinois. Telehealth services can be a great fit for anyone who may be located further away from Warrenville or is unable to make it in for in person sessions. Telehealth services will be provided through HIPPA complaint platforms that include phone or video teleconferencing. I value creating a space that mimics an in person sessions in regards to privacy, structure, and accessibility while meeting with clients virtually.
                   </h4>
              </div>
          </div>
        <ScheduleSection />
      </div>
    );
  };
  