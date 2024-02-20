
import ScheduleSection from '../ReusedSections/ScheduleSection'
import Table               from 'react-bootstrap/Table';

export default function Insurance() {
    return (
      <div className="App">
          <section id='insuranceHeader' data-aos="fade-in">
            <h2> Insurance and Rates </h2>
            <h4 > I am in-network provider for BCBS PPO & Choice plans, United Healthcare, and also offer self pay options.</h4>
            <h4> As per the <a href='https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/no-surprises-act'> No Surpise Act </a>, you have the right to recieve a Good Faith estimate of what your services may cost.</h4>
        </section>
        <section id="insuranceTable">
            <div className='sectionTitle'>
                <h4 id="homeAboutMeQuickLinksTitle"> Self Pay Rates:</h4>
                <h5 id="homeAboutMeQuickLinksSubtitle" className='sectionSubtitle'> Self pay rates follow the CPT Codes for standardized outpatient psychotherapy sessions:</h5>
            </div>
            <Table striped bordered hover id='insuranceTableTable'>
                <thead>
                    <tr>
                    <th>CPT Code</th>
                    <th> Session Duration</th>
                    <th> Type of Session</th>
                    <th> Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>90837</td>
                        <td>60 minutes</td>
                        <td>Individual Psychotherapy Appointment</td>
                        <td> $150 </td>
                    </tr>
                    <tr>
                        <td>90834</td>
                        <td>45 minutes</td>
                        <td> Individual Psychotherapy Appointment</td>
                        <td> $112.50</td>
                    </tr>
                    <tr>
                        <td>90791</td>
                        <td> Typically 60 minutes</td>
                        <td> Any Initial Appointment</td>
                        <td> $200</td>
                        </tr>
                    <tr>
                        <td>90847</td>
                        <td> Typically 60 minutes</td>
                        <td> Family Psychotherapy Appointment with Client Present</td>
                        <td> $150</td>
                    </tr>
                    <tr>
                        <td>90846</td>
                        <td> Typically 60 minutes</td>
                        <td>Family Psychotherapy without Client Present</td>
                        <td>$150</td>
                    </tr>
                </tbody>
            </Table>
                    <h2 style={{'textAlign':'center'}}> In addition, sliding scale rates are available. Please contact me to discuss more. </h2>
        </section>
        <ScheduleSection />
      </div>
    );
  };
  