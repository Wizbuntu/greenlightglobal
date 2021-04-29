// useState
import {useState} from "react"

// react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// react coutry state selector
import {RegionDropdown, CountryRegionData } from 'react-country-region-selector';

// toaster
import toast, { Toaster } from 'react-hot-toast';

// validator 
import isEmail from 'validator/lib/isEmail';



// init Applicant information --- [STEP 1] Application form
const applicantInformation = (props) => {

    // init Date
    const [startDate, setStartDate] = useState(null)

    // init dateApplied
    const [dateApplied, setDateApplied] = useState(null)

    // inti Usa states
    const [usaState, setUsaState] = useState("")


    // init applicantInformation
    const [ApplicantInformation, setApplicantInformation] = useState({
        lastName: "",
        firstName: "",
        mi: "",
        streetAddress: "",
        apartment: "",
        city: "",
        zipcode: "",
        phone: "",
        email: "",
        socialSecurityNumber: "",
        desiredSalary: "",
        positionAppliedFor: "",
        citizenOfUSA: "",
        authorizedToWorkInUsa: "",
        haveYouWorkedForThisCompany: "",
        whenDidYouWorkForThisCompany: "",
        beenConvictedOfAFelony: "",
        explainWhyYouWereConvicted: ""



    })

    // destructure ApplicantInformation
    const {lastName, firstName, mi, streetAddress, apartment, city, zipcode, phone, email, socialSecurityNumber, desiredSalary, positionAppliedFor, citizenOfUSA, authorizedToWorkInUsa, haveYouWorkedForThisCompany, whenDidYouWorkForThisCompany, beenConvictedOfAFelony, explainWhyYouWereConvicted} = ApplicantInformation



    // init handleChange 
    const handleChange = (data) => (e) => {
        setApplicantInformation({...ApplicantInformation, [data]: e.target.value})

        console.log(ApplicantInformation)
    }


    // init handleNext function
    const handleNext = () => {

        // getApplicantInformation
        const applicationInformation = {
            ...ApplicantInformation,
            usaState: usaState,
            dateApplied: dateApplied,
            startDate: startDate
        }

        // validate applicationInformation
        if(!(lastName && firstName && mi && streetAddress && apartment && city && city && zipcode && phone && usaState && email && socialSecurityNumber && desiredSalary && positionAppliedFor && citizenOfUSA && haveYouWorkedForThisCompany && beenConvictedOfAFelony)) {
            return toast.error("Some fields are still empty, please check")
        }

         // validate dates
        if(!(dateApplied && startDate)) {
            return toast.error("Please select date")
        }

        // validate isEmail
        if(!isEmail(email)) {
            return toast.error("Please enter valid email")
        }

       

        // send to parent component 
        props.applicantInformation(applicationInformation)
        

        props.nextStep()


    }

    return (
        <section className="contact">
            <Toaster/>
            <div className="container">
                <h1 className="mb-4">Applicant Information</h1>
                <div className="row">
                    <div className="col-md-12">
                        {/* form */}
                    <form>
                        {/* first name and last name */}
                        <div className="row">
                            <div className="col-md-6">
                                <label>Last Name</label>
                                <input type="text" className="form-control" value={lastName} onChange={handleChange('lastName')} placeholder="Last Name" required/>
                            </div>
                            <div className="col-md-6">
                            <label>First Name</label>
                                <input type="text" className="form-control" value={firstName} onChange={handleChange('firstName')} placeholder="First Name" required/>
                            </div>
                        </div>
                        
                        {/* MI and date */}
                        <div className="row">
                            <div className="col-md-5">
                            <label>M.I</label>
                            <input type="text" className="form-control" value={mi} onChange={handleChange('mi')} placeholder="MI" required />
                            </div>

                            <div className="col-md-3">
                           
                           </div>

                            <div className="col-md-4">
                            <label>Date (select date)</label>
                                <DatePicker placeholderText="Date" className="form-control" selected={startDate} onChange={date => setStartDate(date)}/>
                            </div>

                            

                            
                        </div>
                       
                        <div className="row">
                            <div className="col-md-6">
                            <label>Street Address</label>
                            <textarea className="form-control" value={streetAddress} onChange={handleChange('streetAddress')} placeholder="Street Address" required></textarea>
                            </div>

                            <div className="col-md-6">
                            <label>Apartment/Unit</label>
                            <textarea className="form-control" value={apartment} onChange={handleChange('apartment')} placeholder="Apartment/Unit" required></textarea>
                            </div>
                        </div>

                        {/* State and City */}
                        <div className="row">
                            <div className="col-md-4">
                            <label>Select State</label>
                            <RegionDropdown
                                classes="form-control"
                                country={"US"}
                                defaultOptionLabel="Select State"
                                value={usaState}
                                countryValueType="short"
                                onChange={(val) => setUsaState(val)}/>
                            </div>

                            <div className="col-md-4">
                            <label>City</label>
                            <input type="text" className="form-control" value={city} onChange={handleChange('city')}  placeholder="Enter City" required />
                            </div>

                            <div className="col-md-4">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" value={zipcode} onChange={handleChange('zipcode')}  placeholder="Zip Code" required />
                            </div>
                        </div>

                        {/* Phone & Email address */}
                        <div className="row">
                            <div className="col-md-6">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" value={phone} onChange={handleChange('phone')} placeholder="Phone Number" required />
                            </div>

                            <div className="col-md-6">
                            <label>Email</label>
                            <input type="email" className="form-control" value={email} onChange={handleChange('email')}  placeholder="Email" required />
                            </div>
                        </div>

                        {/* Date Applied, Social security number & Desired salary */}
                        <div className="row">
                            <div className="col-md-4">
                            <label>Date Applied</label>
                                <DatePicker placeholderText="Date Applied" className="form-control" selected={dateApplied} onChange={date => setDateApplied(date)}/>
                            </div>

                            <div className="col-md-4">
                            <label>Social Security Number</label>
                            <input type="text" className="form-control" value={socialSecurityNumber} onChange={handleChange('socialSecurityNumber')}  placeholder="Social Security Number" required />
                            </div>

                            <div className="col-md-4">
                            <label>Desired Salary</label>
                            <input type="text" className="form-control" value={desiredSalary} onChange={handleChange('desiredSalary')} placeholder="Desired Salary" required />
                            </div>
                        </div>
                            {/* Position Applied for */}
                        <div className="row">
                                <div className="col-md-12">
                                <label>Position Applied</label>
                                <input type="text" className="form-control" value={positionAppliedFor} onChange={handleChange('positionAppliedFor')}  placeholder="Position Applied for" required />
                                </div>
                        </div>

                        {/* Question Section */}
                        <div className="row">
                            <div className="col-md-6">
                                <label>Are you a citizen of the United States?</label>
                                <select value={citizenOfUSA} onChange={handleChange('citizenOfUSA')} className="form-control" required>
                                    <option value="" value="">select option</option>
                                    <option value="yes" value="yes">Yes</option>
                                    <option value="no" value="no">No</option>
                                </select>
                            </div>

                            {citizenOfUSA === "no" && <div className="col-md-6">
                                <label>If no, are you authorized to work in the U.S.?</label>
                                <select onChange={handleChange('authorizedToWorkInUsa')} className="form-control">
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>} 
                            
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Have you ever worked for this company?</label>
                                <select onChange={handleChange('haveYouWorkedForThisCompany')} className="form-control" required>
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            {haveYouWorkedForThisCompany === "yes" && <div className="col-md-6">
                                <label>If so, when?</label>
                                <input value={whenDidYouWorkForThisCompany} onChange={handleChange('whenDidYouWorkForThisCompany')} type="text" className="form-control" placeholder="When did you work for this company?"/>
                            </div>}
                            
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Have you ever been convicted of a felony?</label>
                                <select onChange={handleChange('beenConvictedOfAFelony')} className="form-control" required>
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            {beenConvictedOfAFelony === "yes" && <div className="col-md-6">
                                <label>If yes, explain</label>
                                <textarea value={explainWhyYouWereConvicted} onChange={handleChange('explainWhyYouWereConvicted')} type="text" className="form-control" placeholder="Explain"></textarea>
                            </div>}
                            
                        </div>

                        
                        <button style={{float: 'right'}} type="button" onClick={() => handleNext()} className="btn btn-success">Next</button>
                </form>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default applicantInformation
