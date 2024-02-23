//Import in all required hooks and dependencies
//Import all bootstrap components
import Carousel from 'react-bootstrap/Carousel';
//Import in all media
import headerVideo from '../../Assets/Videos/servicesPageLandingVideo.mp4';

//Import reused components
import VideoSection    from '../ReusedSections/VideoSection';
import ScheduleSection from '../ReusedSections/ScheduleSection'



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
      <div className='textAndCarousel' id="individualTherapy">
        <div className='carouselHalfWidth'>
        <Carousel className='halfCarousel'>
                <Carousel.Item>
                    <img
                    src="https://images.unsplash.com/photo-1651372381086-9861c9c81db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='textHalfWidth'>
          <h2> Individual Therapy</h2>
          <div className='text'>
          <p>
            <span className='tab'></span>
            Individual therapy provides people with an opportunity to strive for their needs while simultaneously processing their thoughts and feelings. I want to make sure that any choices we are collaborating on in therapy feel accessible at home, work, school and within all relationships. Together, we can create a space that allows for each person to be accepted and live authentically.
          </p>
          <p>
            <span className='tab'></span>
            Therapy completed with children, adolescents, and adults varies. Below I will walk through the similarities and differences between each type of individual therapy.
          </p>
          </div>
        </div>
      </div>
      <div className='textAndCarousel' id="childAndAdolescentTherapy">
      <div className='carouselHalfWidth'>
        <Carousel className='halfCarousel'>
                <Carousel.Item>
                    <img
                    src="https://images.unsplash.com/photo-1629583736791-b80401195bcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      src="https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src="https://images.unsplash.com/photo-1542728034-9f9781a0b9e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src="https://images.unsplash.com/photo-1610971309274-4a7e4081f40b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Carousel.Item>
            </Carousel>
      </div>
        <div className='textHalfWidth'>
          <h2> Child and Adolescent Individual Therapy </h2>
          <div className='text'>
            <p>
              <span className='tab'></span>
              One of the hardest things to experience as a parent is feeling disconnected from your child/teen. The behavior of children and teens can be baffling, leading parents to feel upset, burnt out, and frustrated. All parents want is to understand and reconnect with their kids. Together, we can create a space for your child/teen that allows them to explore their emotions and thoughts while identifying skills to help them get through stressful times.
            </p>
            <p>
              <span className='tab'></span>
              When working with children and adolescents, it’s important that I am able to partner with their caregiver/s. Adults have expertise on their child’s and teen’s experiences and are also doing all the hard work to raise them. I want them to feel empowered in their parenting role.
            </p>
            <p>
              <span className='tab'></span>
              I encourage consistent communication between myself and caregivers to provide support, answer questions, and assess where we are with treatment. The amount of communication between myself and caregivers will vary depending on the child’s age. For each client, I work together with the child/teen and caregivers on our method of communicating needs.
            </p>
            <p>
              <span className='tab'></span>
              The sessions I lead with children under 12 years old will utilize play-based interventions. Children do not have the same capacity as adults to talk about what’s going on, rather they act out their experiences through play. These types of interventions support a child where they are at in all areas of their development while focusing on their strengths. Play therapy interventions can also help with enhancing kids' abilities to problem solve and regulate emotions.
            </p>
            <p>
              <span className='tab'></span>
              The sessions I lead with adolescents will include evidenced based interventions that help them cope with school-related, friendship, family, identity-related, and work-related stressors. My goal with teens is to encourage them to connect with their strengths as they vocalize needs and embrace who they are. Sessions with adolescents will involve talk based interventions and more individual time spent in therapy compared to child individual therapy.
            </p>
            <p>
              <span className='tab'></span>
              Some of the cases I have experience working with for children and adolescents include:anxiety, depression, trauma, emotional regulation, neurodivergence, relational stressors, friendships, bullying, self-esteem, school related stressors, identity exploration/expression, and sensory related stressors.
            </p>
            <p>
              <span className='tab'></span>
              I also have experience providing support for children and teens while they adjust to major life changes such as parental separation/divorce, blending families, adoption or foster care, grief from a death/loss, coming out about their queer-based identities, and geographic moves.
            </p>
          </div>
        </div>

      </div>
      <div className='textAndCarousel' id="adultIndividualTherapy">
      <div className='carouselHalfWidth'>
        <Carousel className='halfCarousel'>
                  <Carousel.Item>
                    <img
                    src="https://images.unsplash.com/photo-1562894751-66ce94b05c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2596&q=80" 
                     />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src="https://images.unsplash.com/photo-1619380612094-d06429fa92d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"                   
                     />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      src="https://images.unsplash.com/photo-1680710254589-c61565d41bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2522&q=80"                  
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      src="https://images.unsplash.com/photo-1523464737726-0e7a90d66ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"                    />
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='textHalfWidth'>
            <h2> Adult Individual Therapy  </h2>
            <div className='text'>
              <p>
                <span className='tab'></span>
                The culmination of stress can take a toll on our relationships with ourselves, families, friends, co-workers, and romantic partners. We may feel like we are stuck in unhelpful, negative thinking patterns and bodies feel more tense. We may feel like we are hiding parts of ourselves from others. We may be acting in a way that doesn’t align with what is important to us. Many of us are probably sick and tired of feeling this way!
              </p>
              <p>
                <span className='tab'></span>
                Adult individual therapy allows people the opportunity to receive unconditional support through stressful life events. This support includes feeling heard, having a private space to process events, and utilizing strengths to identify choices that help achieve goals. Together, we can create a space where we embrace more of who you are while breaking out of patterns of responses that no longer feel helpful.
              </p>
              <p>
                <span className='tab'></span>
                Some of the cases I have experience working with for adults include: anxiety, depression, trauma, emotional regulation, neurodivergence, work related stressors, identity exploration/expression, kink/sexual diversity, communication stressors, intimacy stressors, and relational stressors.
              </p>
              <p>
                <span className='tab'></span>
                I also have experience providing support for adults while they adjust to major life changes such as separation/divorce, job loss, blending families, adopting or fostering a child, coming out about their queer-based identities, grief from a death/loss, and geographic moves.
              </p>
            </div>
        </div>
      </div>
      <div className='textAndCarousel' id="couplesTherapy">
        <div className='carouselHalfWidth'>
          <Carousel className='halfCarousel'>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1469989011449-f7b46079781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="eldery couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1476981583534-af3523512316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80" alt="eldery couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1619208110262-90c0438c174d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="eldery couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1457367756802-2c6127b8ad11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1449&q=80" alt="eldery couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1562386144-647fa76ce59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2584&q=80" alt="queer couple"/>
                  </Carousel.Item>
              </Carousel>
        </div>
        <div className='textHalfWidth'>
            <h2> Couples Therapy </h2>
            <div className='text'>
              <p>
                <span className='tab'></span>
                The relational timeline for any couple is dynamic.
              </p>
              <p>
                <span className='tab'></span>
                I bet you and your partner remember and cherish moments where you experienced love and desire. You both could be intimate with each other and didn’t have to mold your relationship into what others wanted. Stress levels were lower for both of you.
              </p>
              <p>
                <span className='tab'></span>
                Depending on what's happening for you and your partner, it may be more difficult to recreate connecting moments. It could be that you both are stuck in an environment that doesn't allow for authenticity. You each could have experienced life events where one or both of you have changed since the beginning of the relationship, or you each may be anticipating a major life change. You each are juggling many responsibilities in multiple areas of your lives. There may be so much hurt that has built up in the relationship that it’s hard to focus on connection.
              </p>
              <p>
                <span className='tab'></span>
                My role is to not fix a couple, as no couple is broken. I believe couples come into therapy when they are tired of feeling stuck in cycles of relational disconnection. Couples therapy can allow you and your partner the opportunity to get creative with finding your methods in reinvigorating passion within the relationship.
              </p>
              <p>
                <span className='tab'></span>
                The systemic interventions I utilize with couples allow me to simultaneously focus on each person individually as well as their dynamic together. To facilitate these interventions, I assume the role of a coach. I guide couples in processing events to help them gain more awareness and understanding of each other and their relationship. I empower each member in the couple to re-engage with their strengths, support differences, and work together to strive towards a shared goal.
              </p>
              <p>
                <span className='tab'></span>
                Some of the cases I have experience working with for couples include: communication stressors, intimacy stressors, emotional distance, family-related stressors, career related stressors, cultural stressors, parenting stressors, LGBTQIA+, and kink/sexual diversity.
              </p>
              <p>
                <span className='tab'></span>
                I also have experience providing support for couples while they adjust to major life changes such as moving in, getting married, separating/divorcing, infidelity, expecting a child, career changes, blending families, adopting or fostering a child, and grief from a death/loss
              </p>
            </div>
        </div>
      </div>
      <div className='textAndCarousel' id="familyTherapy">
      <div className='carouselHalfWidth'>
          <Carousel className='halfCarousel'>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1529518152792-d08317b26e22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="queer couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1627007410492-f410bb5ae2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="eldery couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                  <img src="https://images.unsplash.com/photo-1528425646626-fcc5dd57daf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2516&q=80" alt="eldery couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1643818657367-491080baeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="eldery couple"/>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1643868420405-48e32c6f4620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="eldery couple"/>
                  </Carousel.Item>
              </Carousel>
        </div>
        <div className='textHalfWidth'>
              <h2> Family Therapy </h2>
              <div className='text'>
                <p>
                  <span className='tab'></span>
                  I want you to take a moment and imagine your favorite team. Who are some of the people on this team? What are their roles? What is their team’s end goal? What steps will each team member need to take to achieve their goal? How does the team overcome a loss? How can the team continue to feel motivated? The answers to these questions are things that I am also seeking to understand about a family.
                </p>
                <p>
                  <span className='tab'></span>
                  I believe that families come in to see me when they feel stuck with their current dynamic. This can include a variety of things including people not getting along, adjusting to changes within or outside of the family, or wanting to connect more deeply.
                </p>
                <p>
                  <span className='tab'></span>
                  I guide families in being more aware and understanding the environment in which they are in. Let’s imagine your favorite team again. Say for example, there is an outdoor game and it starts to rain. The team has choices on how they want to respond to the change. Families undergo similar processes while navigating life experiences. My role is to be here to help a family identify their method of connecting with each other while they take environmental changes into account.
                </p>
                <p>
                  <span className='tab'></span>
                  All families need different roles and it is important within our time together that we appreciate people’s strengths. The systemic interventions I utilize with families center around each person and their relationships. To facilitate these interventions, I assume the role of a coach. I collaborate with family members on ways they can overcome hardships while conveying hope in a family’s abilities to move through difficult moments.
                </p>
                <p>
                  <span className='tab'></span>
                  Some of the cases I have experience working with for families include: communication stressors, anxiety, depression, disengagement, cultural stressors, parenting stressors, LGBTQIA+
                </p>
                <p>
                  <span className='tab'></span>
                  I also have experience providing support for families while they adjust to major life changes such as moving, finances, separation/divorce, expecting a child, career changes, blending families, adopting or fostering a child, chronic illness of a family member, coming out about queer based identity, and grief from a death/loss.
                </p>
              </div>
        </div>
      </div>
      <ScheduleSection />
    </div>
  );
};
  