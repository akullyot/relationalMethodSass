//Import in all needed hooks and dependencies
import {Link}      from 'react-router-dom';

export default function VideoSection({ data }){
    console.log(data)

    return(
        <section className="videoHeader"  data-aos="fade-in-right">
        <div className="videoOverlayText" >
          <h2> {data.title}</h2>
          <h3> {data.subtitle}</h3>
          <h4> {data.description}</h4>
          <div className="buttonWrapper">
            <Link to="/contact"> <i className="fa-regular fa-calendar"></i> Schedule a Consultation</Link>
          </div>
        </div>
        <video src={data.video} className="fullSectionVid"  autoPlay loop muted>
        </video>
      </section>
    )
}