import {useState, Fragment} from 'react'

// react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// toaster
import toast, { Toaster } from 'react-hot-toast';


// import axios 
import axios from 'axios'


const healthcareFacilities = () => {

    // init DatesFrom 
    const [DateFrom, setDateFrom] = useState("")

    // init DateTo
    const [DateTo, setDateTo] = useState("")

    // init Loading
    const [Loading, setLoading] = useState(false)

    // init staffingRequestData 
    const [staffingRequest ,setStaffingRequest] = useState({
        facilityName: "",
        facilityAddress: "",
        nameOfContactPerson: "",
        email: "",
        phone: "",
        positionNeeded: "",
        comments: ''
       
    })

    // destructure
    const {facilityName, facilityAddress, nameOfContactPerson, email, phone, positionNeeded, comments} = staffingRequest

    // init handleChange
    const handleChange = (data) => (event) => {
        // update staffingRequest 
        setStaffingRequest({...staffingRequest, [data]: event.target.value})
        
    }


    // init handleSubmit 
    const handleSubmit = (event) => {
        // update Loading state 
        setLoading(true)

        // preventDefault 
        event.preventDefault()

        // init staffingRequestData 
        const staffingRequestData = {
            ...staffingRequest,
            DateFrom,
            DateTo
        }

        // post request to healthcare endpoint 
        axios.post('/api/healthcare', staffingRequestData)
        .then(({data}) => {
            // update Loading state 
            setLoading(false)

            // if not success
            if(!data.success) {
                return toast.error(data.data)
            }

            // clear fields
            setStaffingRequest({...staffingRequest, 
            facilityName: '',
            facilityAddress: '',
            nameOfContactPerson: '',
            email: '',
            phone: '',
            positionNeeded: '',
            comments: ''
            })

            // return success
            return toast.success(data.data)
        })
        .catch((error) => {
            setLoading(false)
            console.log(error)
        })
    }

    return (
        <Fragment>
    <section className="banner" style={{backgroundColor: "inherit"}}>
        <div className="container">
            <Toaster/>
        <section className="contact">
            <div className="container">
                <h1 className="mb-4">Healthcare facility Nurse Staffing Request</h1>
                <p>Greenlight Global Agency is dedicated to assist your facility with qualified and dedicated Nurses
                    that will work in your facility to meet your team goals. Please contact us by completing the
                    staffing inquiry below, email your inquiry to <b>admin@greenlightglobal.org</b></p>
                <div className="row mt-5">
                    <div className="col-md-12">
                    <h3>Staffing Request</h3>


                    <form className="mt-3" onSubmit={(event) => handleSubmit(event)}>
                        {/* Facility Name and Facility Address */}
                        <div className="row">
                            <div className="col-md-6">
                                <label>Facility Name</label>
                                <input value={facilityName} onChange={handleChange('facilityName')} type="text" className="form-control" placeholder="Facility Name" required/>
                            </div>
                            <div className="col-md-6">
                            <label>Facility Address</label>
                                <input value={facilityAddress} onChange={handleChange('facilityAddress')} type="text" className="form-control" placeholder="Facility Address" required/>
                            </div>
                        </div>

                        {/* Name of Contact Person & Email & Phone */}
                        <div className="row">
                            <div className="col-md-4">
                                <label>Name of Contact Person</label>
                                <input value={nameOfContactPerson} onChange={handleChange('nameOfContactPerson')} type="text" className="form-control" placeholder="Name of Contact Person" required/>
                            </div>
                            <div className="col-md-4">
                            <label>Email</label>
                                <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Email" required/>
                            </div>
                            <div className="col-md-4">
                                <label>Phone</label>
                                <input value={phone} onChange={handleChange('phone')} type="text" className="form-control" placeholder="Phone" required />
                            </div>
                        </div>


                         {/* Position Needed  & Date From & Date to */}
                         <div className="row">
                            <div className="col-md-4">
                                <label>Position Needed</label>
                                <input value={positionNeeded} onChange={handleChange('positionNeeded')} type="text" className="form-control" placeholder="Position Needed" required/>
                            </div>
                            <div className="col-md-4">
                            <label style={{display: 'block'}}>Dates From</label>
                            <DatePicker placeholderText="Date From" className="form-control" selected={DateFrom} onChange={date => setDateFrom(date)} required/>
                            </div>
                            <div className="col-md-4">
                            <label style={{display: 'block'}}>Dates To</label>
                            <DatePicker placeholderText="Date To" className="form-control" selected={DateTo} onChange={date => setDateTo(date)} required/>
                            </div>
                        </div>

                        {/* comments */}
                        <div className="row">
                            <div className="col-md-12">
                                <label>Comments</label>
                                <textarea value={comments} onChange={handleChange('comments')} className="form-control" placeholder="Comments"></textarea>
                            </div>
                        </div>
                        
                        {Loading?  <button type="button" className="btn btn-success" disabled>Loading...</button> : 
                         <button type="submit" className="btn btn-success">Submit</button>
                        }
                       
                    </form>

                    </div>
                </div>
            </div>
        </section>
        </div>
    </section>


        </Fragment>
    )
}

export default healthcareFacilities
