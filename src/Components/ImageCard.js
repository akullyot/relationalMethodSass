//Import in all hooks and dependencies

import { Link }        from 'react-router-dom';
import { useEffect }   from 'react';
import AOS             from 'aos';

//Data structure: {image, altImage, title, description, linkPath, cardDivId}
//corresponds to the mixin of the same class names
export default function ImageCard( { data }){
    useEffect(() => 
    {
        AOS.init();
    }, [])
    const mappedData = data.map((cardData) => {
        return(
            <li className="imageCard" key={cardData.cardDivId} data-aos='fade-right'>
                    <div className="card">
                        <div className={cardData.image}></div>
                        <div className="cardContent">
                            <div className="cardTitle"> {cardData.title} </div>
                            <p className="cardText">{cardData.description}</p>
                            <div className="buttonWrapper">
                                <Link to={cardData.linkPath}> <i className="fa-solid fa-plus"></i> Learn More</Link>
                            </div>
                        </div>
                    </div>
            </li>
        )
    });
    return(
        <ul className='imageCardHolder'>
            {mappedData}
        </ul>

    )
}