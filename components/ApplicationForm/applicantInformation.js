// useState
import {useState, Fragment} from "react"

// react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// usa states and cities
import { usaCities, usaStates } from 'typed-usa-states';

// init Applicant information --- [STEP 1] Application form
const applicantInformation = () => {

    // init Date
    const [startDate, setStartDate] = useState(null)

    // init dateApplied
    const [dateApplied, setDateApplied] = useState(null)


    // init applicantInformation
    const [ApplicantInformation, setApplicantInformation] = useState({
        lastName: "",
        firstName: "",
        mi: "",
        streetAddress: "",
        apartment: "",
        state: "",
        city: "",
        zipcode: "",
        phone: "",
        email: "",
        socialSecurityNumber: "",
        desiredSalary: "",
        positionAppliedFor: "",
        citizenOfUSA: "",


    })

    // destructure ApplicantInformation
    const {lastName, firstName, mi, streetAddress, apartment, state, city, zipcode, phone, email, socialSecurityNumber, desiredSalary, positionAppliedFor, citizenOfUSA} = ApplicantInformation



    // init handleChange 
    const handleChange = (data) => (e) => {
        setApplicantInformation({...ApplicantInformation, [data]: e.target.value})

        console.log(ApplicantInformation)
    }


    return (
        <section className="contact">
            <div className="container">
                <h1 className="mb-4">Applicant Information</h1>
                <div className="row">
                    <div className="col-md-12">
                        {/* form */}
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" className="form-control" value={lastName} onChange={handleChange('lastName')} placeholder="Last Name"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" value={firstName} onChange={handleChange('firstName')} placeholder="First Name"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                            <input type="text" className="form-control" value={mi} onChange={handleChange('mi')} placeholder="MI" required />
                            </div>

                            <div className="col-sm-6">
                               
                            <DatePicker placeholderText="Date" className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="col-sm-6">
                            <textarea className="form-control" value={streetAddress} onChange={handleChange('streetAddress')} placeholder="Street Address" required></textarea>
                            </div>

                            <div className="col-sm-6">
                            <textarea className="form-control" value={apartment} onChange={handleChange('apartment')} placeholder="Apartment/Unit" required></textarea>
                            </div>
                        </div>

                        {/* State and City */}
                        <div className="row">
                            <div className="col-sm-4">
                            <select className="form-control">
                            <option value={state} onChange={handleChange('state')}>select state</option>
                            {usaStates.map((states, index) => {
                                return <Fragment key={index}>
                                    <option value={states.name}>{states.name}</option>
                                   
                                </Fragment>
                            })}
                            
                            </select>
                            </div>

                            <div className="col-sm-4">
                            <select className="form-control">
                            <option value={city} onChange={handleChange('city')}>select city</option>
                            {usaCities.map((cities, index) => {
                                return <Fragment key={index}>
                                    <option value={cities.name}>{cities.name}</option>
                                   
                                </Fragment>
                            })}
                            
                            </select>
                            </div>

                            <div className="col-sm-4">
                            <input type="text" className="form-control" value={zipcode} onChange={handleChange('zipcode')}  placeholder="Zip Code" required />
                            </div>
                        </div>

                        {/* Phone & Email address */}
                        <div className="row">
                            <div className="col-sm-6">
                            <input type="text" className="form-control" value={phone} onChange={handleChange('phone')} placeholder="Phone Number" required />
                            </div>

                            <div className="col-sm-6">
                            <input type="email" className="form-control" value={email} onChange={handleChange('email')}  placeholder="Email" required />
                            </div>
                        </div>

                        {/* Date Applied, Social security number & Desired salary */}
                        <div className="row">
                            <div className="col-sm-4">
                               
                                <DatePicker placeholderText="Date Applied" className="form-control" selected={dateApplied} onChange={date => setDateApplied(date)} />
                            </div>

                            <div className="col-sm-4">
                         
                            <input type="text" className="form-control" value={socialSecurityNumber} onChange={handleChange('socialSecurityNumber')}  placeholder="Social Security Number" required />
                            </div>

                            <div className="col-sm-4">
                           
                            <input type="text" className="form-control" value={desiredSalary} onChange={handleChange('desiredSalary')} placeholder="Desired Salary" required />
                            </div>
                        </div>
                            {/* Position Applied for */}
                        <div className="row">
                                <div className="col-md-12">
                                <input type="text" className="form-control" value={positionAppliedFor} onChange={handleChange('positionAppliedFor')}  placeholder="Position Applied for" required />
                                </div>
                        </div>

                        {/* Question Section */}
                        <div className="row">
                            <div className="col-md-6">
                                <label>Are you a citizen of the United States?</label>
                                <select className="form-control">
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>If no, are you authorized to work in the U.S.?</label>
                                <select className="form-control">
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Have you ever worked for this company?</label>
                                <select className="form-control">
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>If so, when?</label>
                                <input type="text" className="form-control" placeholder="When did you work for this company?" required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Have you ever been convicted of a felony?</label>
                                <select className="form-control">
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>If yes, explain</label>
                                <textarea type="text" className="form-control" placeholder="Explain" required></textarea>
                            </div>
                        </div>




                        
                        <button type="submit" className="btn btn-success">send message</button>
                </form>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default applicantInformation
