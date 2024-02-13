//Import all needed hooks and dependencies
import { useRef, useState }       from 'react';
import emailjs                    from '@emailjs/browser';
import { ToastContainer, toast }  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container                  from 'react-bootstrap/Container';
import Row                        from 'react-bootstrap/Row';
import Col                        from 'react-bootstrap/Col';



export default function Contact () {
    const email = "ashleyu@relationalmethod.com";
    //State variables
    const form = useRef();
    //First Name
    let [focusedFirstSpan, setFocusedFirstSpan] = useState(false);
    //Last Name
    let [focusedLastSpan, setFocusedLastSpan] = useState(false);
    //Email
    let [focusedEmailSpan, setFocusedEmailSpan] = useState(false);
    //Phone
    let [focusedPhoneSpan, setFocusedPhoneSpan] = useState(false);

    //Purpose: Sends an Email to Ashley using emailjs
    const handleSendEmail = (event) => 
    {
        event.preventDefault();

        emailjs.sendForm('service_f4cpv2e', 'template_e4unwj7', form.current, 'DvBIO8QTsg6p8V3cN')
        .then((result) => 
        {
            //TODO give a success popup
            console.log('message sent')
            toast.success('Email Sent Successfully! Thank you for trusting me in your therapy process')
        }, (error) => 
        {
            //give an error pop up 
            console.log(error.text);
            toast.error('There was a problem sending you email. If the problem persists, email me directly at '+ email);

        });
    };
    return (
        <div id="contactWrapper">
            <ToastContainer/>
            <section className="formHolder">
                <form id="scheduleConsultForm" ref={form} onSubmit={handleSendEmail}>
                <h2 className="formTitle"> Schedule A Free, 15 Minute Consultation</h2>
                    <Container>
                        <Row>
                            <Col md={12} lg={7} id="formFields">                        
                            <div className = "inputAndTitle">
                                <label className = "label" htmlFor="user_firstName">Your First Name: </label>
                                <span className="required-field">*</span>
                                <div className = "inputBox">
                                    <input type="text" id="user_firstName" name="user_firstName"  minLength="2" maxLength="35" required   onBlur={(event)=>{if(event.target.value){setFocusedFirstSpan(true)}else{setFocusedFirstSpan(false)}}}/>
                                    <span className={focusedFirstSpan ? 'focusInSpan' : null} id="firstnamespan"> First Name </span>
                                </div>
                            </div>
                            <div className = "inputAndTitle">
                                <label className = "label" htmlFor="user_lastName">Your Last Name: </label>
                                <span className="required-field">*</span>
                                <div className = "inputBox">
                                    <input type="text" id="user_lastName" name="user_lastName" required minLength="2" maxLength="35" onBlur={(event)=>{if(event.target.value){setFocusedLastSpan(true)}else{setFocusedLastSpan(false)}}}/>
                                    <span id="lastnamespan" className={focusedLastSpan ? 'focusInSpan' : null}> Last Name </span>
                                </div>
                            </div>
                            <div className="inputAndTitle">
                                <label className= "label" htmlFor="user_email">Your Email:</label>
                                <span className="required-field">*</span>
                                <div className="inputBox">
                                    <input type="email" id="user_email" name="user_email" required onBlur={(event)=>{if(event.target.value){setFocusedEmailSpan(true)}else{setFocusedEmailSpan(false)}}}/>
                                    <span id="emailspan" className={focusedEmailSpan ? 'focusInSpan' : null}> Email Address </span>
                                </div>
                            </div>
                            <div className="inputAndTitle">
                                <label className= "label" htmlFor="user_phone">Your Phone Number:</label>
                                <span className="required-field">*</span>
                                <div className="inputBox">
                                    <input type="tel" id="user_phone" name="user_phone" required  onBlur={(event)=>{if(event.target.value){setFocusedPhoneSpan(true)}else{setFocusedPhoneSpan(false)}}}/>
                                    <span id="phonespan" className={focusedPhoneSpan ? 'focusInSpan' : null}> Phone Number</span>
                                </div>
                            </div>
                            </Col>
                            <Col md={12} lg={4} id="formDescription">
                                <h3> Information to Include in Your Message:</h3>
                                <ol>
                                    <li> Breifly explain who you are, and what brings you here</li>
                                    <li> What are you contacting about (i.e an initial consult or a question about fees or insurance)</li>
                                    <li> When are you available, and how best to reach you (phone, or email)</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                        <div className="inputAndTitle">
                                    <br/>
                                    <label className= "label" htmlFor="user_email">Your Message:</label>
                                    <span className="required-field">*</span>
                                    <div className="inputBox" style={{'width':'80%', 'height' :'35vh'}}>
                                        <textarea style={{'height' :'30vh'}}name="message" />
                                    </div>
                        </div>
                        <input type="submit" value="Send" />
                </form>
                <section id="formInstructions">

                </section>

            </section>


        </div>



    )
      
};
  