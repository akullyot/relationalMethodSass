//Import in all needed hooks and dependencies
import {Link}      from 'react-router-dom';

export default function VideoSection({ data }){
    console.log(data)

    return(
        <section className="videoHeader">
        <div className="videoOverlayText"  >
          <h2 data-aos="fade-right" data-aos-duration="800"> {data.title}</h2>
          <h3 data-aos="fade-right" data-aos-duration="1000"> {data.subtitle}</h3>
          <h4 data-aos="fade-right" data-aos-duration="1000"> {data.description}</h4>
          <div  data-aos="fade-right" data-aos-duration="1100" className="buttonWrapper">
            <Link to="/contact"> <i className="fa-regular fa-calendar"></i> Schedule a Consultation</Link>
          </div>
        </div>
        <video src={data.video} className="fullSectionVid"  autoPlay loop muted>
        </video>
      </section>
    )
}