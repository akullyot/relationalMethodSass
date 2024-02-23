//Import in all hooks and dependencies
import { HashLink } from 'react-router-hash-link'; 
//Import in all required media
import headerVideo   from '../../Assets/Videos/aboutMeVideo.mp4';
import approachImage from '../../Assets/Images/areasOfFocusFinal.png'   
//Import reused components
import VideoSection    from '../ReusedSections/VideoSection';
import ScheduleSection from '../ReusedSections/ScheduleSection'


export default function AboutMe() {
  const videoInformation = {
    title: 'Ashley Ullyot, LMFT',
    subtitle: "I'M HERE TO HELP YOU MAKE SENSE OF THE COMPLEXITY OF RELATIONSHIPS WITHIN YOURSELF AND WITH OTHERS",
    description: 'In my therapy sessions, I strive to help my clients navigate the twists and turns of life to find fulfillment in themselves and their relationships',
    video: headerVideo
  }
  const clinicalApproaches = ['ATTACHMENT BASED','CULTURALLY SENSITIVE', 'FAMILY SYSTEMS','STRENGTH BASED','PERSON CENTERED', 'PLAY THERAPY',
                              'TRAUMA INFORMED', ' NARRATIVE', 'STRUCTURAL FAMILY THERAPY', 'EXPERIENTIAL', 'COGNITIVE BEHAVIORAL THERAPY', 'FEMINIST BASED MODELS', 'COLLABORATIVE'];
  const clinicalApproachesList = clinicalApproaches.map(approach => {
    return(
      <li className= 'largeLinkCard'>
        <span className="iconTitle">
          <span> {approach} </span>
        </span>
    </li>
    )
  })
  return (
    <div className="App">
      <VideoSection data ={videoInformation}/>
      <section className='imageTextBasic' id="aboutAshley"  data-aos="fade-up">
          <div className='pictureContainer' id='homeFounderPicture'>
            <div className='framedImage'>
              <h2 className="frameNote">Ashley Ullyot <br/><span> Owner and Founder</span> </h2>
            </div>
          </div>
          <div className='informationTextContainer' data-aos="fade-right">
            <h2>Who Am I?</h2>
            <h3> Hi, I am Ashley Ullyot, the founder of Relational Method PLLC.</h3>
            <div> 
              <h4>
                  <span className="tab"></span>
                  I promise that while you’re in session with me you will not be expected to lay down on a couch and be asked “how does that make you feel.”
              </h4> 
              <h4>
                  <span className="tab"></span>
                  Instead, you can anticipate your time with me to be filled with activities focused on the people, places, interests, and things that are most important to you. I want to hear what has been going on in your life, including all of its ups and downs.
              </h4>
              <h4>
                  <span className="tab"></span>
                  I am personable, creative, and responsive. I enjoy conversations and moments where we can grow together. I am open to sharing any resources that help mobilize you toward reaching your aspirations while being compassionate about how difficult the journey can be. Because I deeply believe in people’s abilities to overcome hardships, I will be honest if there’s something you’re doing to limit yourself.
              </h4>
            <h4>
                  <span className="tab"></span>
                  I am an active participant in the therapy relationship. I help people map out their goals while remaining mindful of who they were, where they are now, and where they want to continue to go. We then work together to identify a series of choices that feel accessible and authentic to you. Together, we create your method in navigating life.
              </h4>
            </div>
          </div>
      </section>
      <section className= "basicCardsHolder" id="areasOfFocus"  data-aos="fade-up">
        <div className='basicCardsTitle'>
          <h2> Areas of Focus</h2>
          <h3>I strive to help my clients with whatever life throws their way by putting things into context. Your mental struggles do not define you; life is complex and interconnected! Together, we can find a method that helps put life into context.</h3>
        </div>
        <ul data-aos="fade-in-right">
                    <li className="cards__item">
                    <div className="card">
                        <div className="cardImage card__image--attachment"></div>
                        <div className="cardContent">
                        <div className="cardTitle"> Attachment Injuries  </div>
                        <p className="cardText"> When betrayals happen to an individual during a time of need, it can lead to lowered levels of trust in relationships.</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--anxiety"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> Anxiety </div>
                            <p className="cardText"> I specialize in helping individuals that are experiencing anxiety, stress, and social anxiety. Anxiety can cause you to feel intense worry or fear that interferes with your daily activities and well being.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--depression"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> Depression </div>
                            <p className="cardText"> I work with individuals experiencing depression at many types and levels.  Depression can cause you to feel persistently hopeless, empty, guilty, and lose pleasure in your favorite hobbies and activities. </p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--adjustment"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> Adjustment Disorder </div>
                            <p className="cardText">I have experience aiding those that struggle with an excessive reaction to stressors or transitions. These reactions can include negative thoughts, strong emotions, and changes in behavior that make life difficult to manage.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--trauma"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> Trauma </div>
                            <p className="cardText"> I have extensive experience working with those who have experienced trauma. Together, we can find ways to cope with the difficult emotions trauma creates.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--communication"></div>
                            <div className="cardContent">
                            <div className="cardTitle">  Communication Stressors </div>
                            <p className="cardText"> Communication issues can develop in any circumstance of social relationship. It's easy for one to misunderstand or misinterpret others, and this can lead to tension in personal, friendly, or professional relationships. In our sessions, I aim to help my clients navigate these stressors and achieve peace in their communication.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--life"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> Life Transitions </div>
                            <p className="cardText"> Life transitions, whether they be exciting and hopeful, or negative and traumatic, can be extremely stressful.  I aim to help clients navigate life transitions such as geographic relocations, school or job transitions, relationship changes, and many more.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--relationship"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> Relationship Stressors </div>
                            <p className="cardText"> I have experience in helping couples, individuals, and families work together in developing positive communication and addressing relational stressors. Through our sessions, we can adjust to life's challenges,  and learn to manage the stress, anxiety, and depression caused by relational stressors.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--lgbt"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> LGBTQIA+ </div>
                            <p className="cardText"> I am a queer-affirming therapist that aims to foster a safe, nonjudgemental space in which my patients can feely express themselves and explore all topics relating to gender and sexuality. I also have experience discussing the distress and trauma caused by discrimination and prejudice that members of this community often face.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="cardImage card__image--kink"></div>
                            <div className="cardContent">
                            <div className="cardTitle"> Kink/Sexual Diversity </div>
                            <p className="cardText"> Kink and sexual diversity are sources of pleasure and connection, but, like anything, can pose challenges and issues. I am experienced in discussing the underlying dynamics and helping clients create a safe space to explore such concerns without judgement or shame. </p>
                            </div>
                        </div>
                    </li>
        </ul>
      </section>
      <section className= "imageTextBasic" id="myApproach"  data-aos="fade-up">
           <img className='nonFramedImage' src={approachImage}/>
          <div id='homeFounderInformationTextContainer' className='informationTextContainer' data-aos="fade-right">
            <h2>My Approach</h2>
            <h3>   </h3>
            <div> 
              <h4>
                  <span className="tab"></span>
                  I believe that each person is deserving of fulfillment in every relationship. To attain that, we need to recognize the complexity of relationships within ourselves and with others. In some moments, we may feel connected, confident, and comfortable. Other times we may feel distant, unheard, and hurt. When we become aware of all of our relational experiences, it helps us understand what choices we can make to connect more deeply.
              </h4> 
              <h4>
                  <span className="tab"></span>
                  My approach is viewing the relationships we have with others and ourselves as cycles. Cycles can be defined as patterns of responses where person A’s and B’s actions impact each other. These patterns can also be internal dialogues. Here are some examples:
              </h4>
              <h4>
                  <span className="tab"></span>
                  If person A starts being critical of person B, then person B will respond with defensiveness, and then person A may respond with more criticism.
              </h4>
            <h4>
                  <span className="tab"></span>
                  If person A gives a present to person B, then person B responds by giving a hug to person A, then person A is more likely to give presents to person B in the future.
            </h4>
            <h4>
                  <span className="tab"></span>
                  Some cycles can help us to go about our days and overcome stressful life events. Over time however, some cycles may no longer be serving us and lead to undesirable outcomes. No type of cycle defines our relationship and who we are; but they can promote how connected we feel to ourselves and others. I want to be here to understand the cycles within all your relationships and what has led up to their formation.
            </h4>
            <h4>
                  <span className="tab"></span>
                  Together we can create a method of choices that are accessible and authentic while promoting connection. To do this, my focus will be on personalizing care. We will break down each part of each of your cycles by mapping them. As we become more aware of the parts of each cycle, we can identify what fuels connecting and disconnecting cycles. We will then identify, imagine, and test out choices to see which ones will be the best fit for reaching your goals. I will continually check in to assess where we have been, where we are currently, and where we want to continue going.
            </h4>

            </div>
          </div>

      </section>
      <section className='basicCardsHolder' id="clinicalApproaches" data-aos="fade-up">
        <div className='basicCardsTitle'>
            <h2> Clinical Approaches </h2>
            <h3> I tend to implement the following clinical approaches into my sessions:</h3>
        </div>
        <ul data-aos="fade-in-right" className='wordsGrid'>
          {clinicalApproachesList}
        </ul>

      </section>
      <section className='basicCardsHolder' id="professionalBackground" data-aos="fade-up">
        <div className='basicCardsTitle'>
            <h2> Professional Background </h2>
            <h3>Ashley Ullyot, LMFT</h3>
        </div>
        <h4 className='basicFullWidthText'>I have a Bachelor of Arts degree with a major in Psychology and a minor in Women, Gender, and Sexuality Studies from DePauw University. I have my Master of Arts degree in Couple and Family Therapy from Adler University.
The populations I have experience providing treatment for include individuals, couples, and families across the lifespan. I have worked in a variety of settings including group private practices, community mental health agencies, intensive outpatient, and school based.
I assist people through difficult life events by facilitating a variety of interventions including trauma informed, play-based, and relational activities. My goal with clients is to help them feel more empowered within their relationships with themselves and others.
If you are interested in scheduling a free 15-minute consultation, please send me an email. I look forward to getting to know you more and seeing if I am a good fit within your journey.</h4>

      </section>

      <ScheduleSection />
      </div>
    );
};
  