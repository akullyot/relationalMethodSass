//Import in all hooks and dependencies
import { HashLink } from 'react-router-hash-link'; 


import headerVideo from '../../Assets/Videos/aboutMeVideo.mp4'
//Import reused components
import VideoSection from '../ReusedSections/VideoSection';
import ScheduleSection from '../ReusedSections/ScheduleSection'


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
      <section id="servicesLinkList" data-aos="fade-in">
                <h2 className="linksListHeader"> Table of Contents</h2>
                <ul className="linksListUl">
                    <li> <HashLink to="/aboutme/#aboutAshley"> About Me</HashLink></li>
                    <li><HashLink to="/aboutme/#myApproach"> My Approach</HashLink></li>
                    <li><HashLink to="/aboutme/#areasOfFocus"> Areas of Focus</HashLink></li>
                    <li><HashLink to="/aboutme/#clinicalApproaches"> Clinical Approaches</HashLink> </li>
                    <li><HashLink to="/aboutme/#background"> Professional and Clinical Background</HashLink></li>
                </ul>
      </section>
            <section id="aboutAshley" data-aos="fade-in">
            <div className="whitebackground">
			<Container fluid>
                <Row>
                    <Col>
                        <div className="heading-frame">
                            <h2 id="frameNote">Ashley Ullyot <br/><span> Owner and Founder</span> </h2>
                        </div>
                    </Col>
                    <Col>
                    <div className="servicesExplanation" data-aos="fade-left">
                        <h2> Who Am I?</h2>
                        <h4>Hi, I am Ashley Ullyot, the founder of Relational Method PLLC</h4>
                        <h4>I promise that while you’re in session with me you will not be expected to lay down on a couch and be asked “how does that make you feel.” Instead, you can anticipate your time with me to be filled with activities focused on the people, places, interests, and things that are most important to you. I want to hear what has been going on in your life, including all of its ups and downs.</h4>
                        <h4> I am personable, creative, and responsive. I enjoy conversations and moments where we can grow together.  I am open to sharing any resources that help mobilize you toward reaching your aspirations while being compassionate about how difficult the journey can be. Because I deeply believe in people’s abilities to overcome hardships, I will be honest if there’s something you’re doing to limit yourself. </h4>
                        <h4>I am an active participant in the therapy relationship. I help people map out their goals while remaining mindful of who they were, where they are now, and where they want to continue to go. We then work together to identify a series of choices that feel accessible and authentic to you. Together, we create your method in navigating life.  </h4>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
            </section>
        <section id="areasOfFocus" className="quickLinks" data-aos="fade-in" style={{'backgroundColor' : 'white'}}>
        <h2 className="sectionHeader">  Areas of Focus </h2>
            <h4> I strive to help my clients with whatever life throws their way by putting things <i> into context</i>. Your mental struggles do not define you; life is complex and interconnected! Together, we can find a method that helps put life into context.</h4>
                <ul className="cards" data-aos="fade-in-right">
                    <li className="cards__item">
                    <div className="card">
                        <div className="card__image card__image--attachment"></div>
                        <div className="card__content">
                        <div className="card__title"> Attachment Injuries  </div>
                        <p className="card__text"> When betrayals happen to an individual during a time of need, it can lead to lowered levels of trust in relationships.</p>
                        </div>
                    </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--anxiety"></div>
                            <div className="card__content">
                            <div className="card__title"> Anxiety </div>
                            <p className="card__text"> I specialize in helping individuals that are experiencing anxiety, stress, and social anxiety. Anxiety can cause you to feel intense worry or fear that interferes with your daily activities and well being.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--depression"></div>
                            <div className="card__content">
                            <div className="card__title"> Depression </div>
                            <p className="card__text"> I work with individuals experiencing depression at many types and levels.  Depression can cause you to feel persistently hopeless, empty, guilty, and lose pleasure in your favorite hobbies and activities. </p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--adjustment"></div>
                            <div className="card__content">
                            <div className="card__title"> Adjustment Disorder </div>
                            <p className="card__text">I have experience aiding those that struggle with an excessive reaction to stressors or transitions. These reactions can include negative thoughts, strong emotions, and changes in behavior that make life difficult to manage.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--trauma"></div>
                            <div className="card__content">
                            <div className="card__title"> Trauma </div>
                            <p className="card__text"> I have extensive experience working with those who have experienced trauma. Together, we can find ways to cope with the difficult emotions trauma creates.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--communication"></div>
                            <div className="card__content">
                            <div className="card__title">  Communication Stressors </div>
                            <p className="card__text"> Communication issues can develop in any circumstance of social relationship. It's easy for one to misunderstand or misinterpret others, and this can lead to tension in personal, friendly, or professional relationships. In our sessions, I aim to help my clients navigate these stressors and achieve peace in their communication.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--life"></div>
                            <div className="card__content">
                            <div className="card__title"> Life Transitions </div>
                            <p className="card__text"> Life transitions, whether they be exciting and hopeful, or negative and traumatic, can be extremely stressful.  I aim to help clients navigate life transitions such as geographic relocations, school or job transitions, relationship changes, and many more.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--relationship"></div>
                            <div className="card__content">
                            <div className="card__title"> Relationship Stressors </div>
                            <p className="card__text"> I have experience in helping couples, individuals, and families work together in developing positive communication and addressing relational stressors. Through our sessions, we can adjust to life's challenges,  and learn to manage the stress, anxiety, and depression caused by relational stressors.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--lgbt"></div>
                            <div className="card__content">
                            <div className="card__title"> LGBTQIA+ </div>
                            <p className="card__text"> I am a queer-affirming therapist that aims to foster a safe, nonjudgemental space in which my patients can feely express themselves and explore all topics relating to gender and sexuality. I also have experience discussing the distress and trauma caused by discrimination and prejudice that members of this community often face.</p>
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--kink"></div>
                            <div className="card__content">
                            <div className="card__title"> Kink/Sexual Diversity </div>
                            <p className="card__text"> Kink and sexual diversity are sources of pleasure and connection, but, like anything, can pose challenges and issues. I am experienced in discussing the underlying dynamics and helping clients create a safe space to explore such concerns without judgement or shame. </p>
                            </div>
                        </div>
                    </li>
                </ul>
		</section>
        <section id="myApproach" data-aos="fade-in">
            <div className="whitebackground nopad">
			<Container>
                <Row style={{'justifyContent' : 'spaceBetween'}}>
                    <Col sm={12} md={3} gap={1}>
                            <img className="single" src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" alt="peoples hands"/>
                    </Col>
                    <Col sm={12} md={9}>
                        <div className="servicesExplanation">
                            <h2> My Approach</h2>
                            <h4>I believe that each person is deserving of fulfillment in every relationship. To attain that, we need to recognize the complexity of relationships within ourselves and with others. In some moments, we may feel connected, confident, and comfortable. Other times we may feel distant, unheard, and hurt. When we become aware of all of our relational experiences, it helps us understand what choices we can make to connect more deeply.</h4>
                            <h4> My approach is viewing the relationships we have with others and ourselves as cycles. Cycles can be defined as patterns of responses where person A’s and B’s actions impact each other. These patterns can also be internal dialogues. Here are some examples: </h4>
                            <h4>If person A starts being critical of person B, then person B will respond with defensiveness, and then person A may respond with more criticism. </h4>
                            <h4>If person A gives a present to person B, then person B responds by giving a hug to person A, then person A is more likely to give presents to person B in the future.</h4>
                            <h4>Some cycles can help us to go about our days and overcome stressful life events. Over time however, some cycles may no longer be serving us and lead to undesirable outcomes. No type of cycle defines our relationship and who we are; but they can promote how connected we feel to ourselves and others. I want to be here to understand the cycles within all your relationships and what has led up to their formation. </h4>
                            <h4>Together we can create a method of choices that are accessible and authentic while promoting connection. To do this, my focus will be on personalizing care. We will break down each part of each of your cycles by mapping them. As we become more aware of the parts of each cycle, we can identify what fuels connecting and disconnecting cycles. We will then identify, imagine, and test out choices to see which ones will be the best fit for reaching your goals. I will continually check in to assess where we have been, where we are currently, and where we want to continue going. </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
        <section id="clinicalApproaches" className="quickLinks" data-aos="fade-in" style={{'backgroundColor' : 'white'}}>
            <h2 className="sectionHeader"> My Clinical Approaches Include: </h2>
            <h4> Listed below are some of the clinical approaches I tend to implement.</h4>
            <Container >
                <Row style={{'alignItems':'center', 'justifyContent':'center'}}>
                    <Col md={4}>  <h3> Attachment Based </h3> </Col >
                    <Col  md={3}>  <h3> Culturally Sensitive </h3> </Col>
                    <Col md={4}>  <h3> Family Systems </h3></Col >
                    <Col md={3} >  <h3> Strength Based </h3></Col >
                    <Col md={4} >  <h3> Person Centered </h3></Col>
                    <Col md={3} >  <h3> Play Therapy </h3></Col >
                    <Col md={4} >  <h3> Trauma Informed </h3></Col>
                    <Col md={3} >  <h3> Narrative </h3></Col >
                    <Col  md={4} >  <h3> Structural Family Therapy </h3></Col>
                    <Col  md={3} >  <h3> Experiential </h3></Col>
                    <Col md={4} >  <h3> Cognitive Behavioral Th erapy </h3></Col>
                    <Col  md={3}>  <h3> Feminist Based Models </ h3></Col>
                    <Col  md={4}>  <h3> Collaborative </h3></Col >
                </Row>
            </Container>
		</section>
        <section id="background" className="quickLinks" data-aos="fade-in">
            <h2 className="sectionHeader"> My Professional Background</h2>
            <br></br>
                <div className="servicesExplanation">
                    <h4>I have a Bachelor of Arts degree with a major in Psychology and a minor in Women, Gender, and Sexuality Studies from DePauw University. I have my Master of Arts degree in Couple and Family Therapy from Adler University.</h4>
                    <h4>The populations I have experience providing treatment for include individuals, couples, and families across the lifespan. I have worked in a variety of settings including group private practices, community mental health agencies, intensive outpatient, and school based. </h4>
                    <h4>I assist people through difficult life events by facilitating a variety of interventions including trauma informed, play-based, and relational activities. My goal with clients is to help them feel more empowered within their relationships with themselves and others. </h4>
                    <h4> If you are interested in scheduling a free 15-minute consultation, please send me an email. I look forward to getting to know you more and seeing if I am a good fit within your journey. </h4>
               </div>
		</section>
      <ScheduleSection />
      </div>
    );
};
  