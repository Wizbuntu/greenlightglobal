import {useState, Fragment} from 'react'

// react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// toaster
import toast, { Toaster } from 'react-hot-toast';


// import axios 
import axios from 'axios'


const trainingRegistration = () => {

    // init Dob 
    const [dob, setDob] = useState("")

    // init Loading
    const [Loading, setLoading] = useState(false)

    // init trainingRegistration state 
    const [training ,setTraining] = useState({
        lastName: "",
        firstName: "",
        MI: "",
        program: "",
        address: "",
        phone: "",
        email: "",
        cellPhone: "",
        gender: "",
        elearningEquipment: "",
        highestEducation: "",
        nursingDegree: ""
       
    })

    // destructure
    const {lastName, firstName, MI, program, address, phone, email, cellPhone, gender, elearningEquipment, highestEducation, nursingDegree} = training

    // init handleChange
    const handleChange = (data) => (event) => {
        // update trainingState 
        setTraining({...training, [data]: event.target.value})
       
    }


    // init handleSubmit 
    const handleSubmit = (event) => {
        // update Loading state 
        setLoading(true)

        // preventDefault 
        event.preventDefault()

        // init trainingData 
        const trainingData = {
            ...training,
            dob,
        }

       

        // post request to healthcare endpoint 
        axios.post('/api/training', trainingData)
        .then(({data}) => {
            // update Loading state 
            setLoading(false)

            // if not success
            if(!data.success) {
                return toast.error(data.data)
            }

            // clear fields
            setTraining({...training, 
                lastName: "",
                firstName: "",
                MI: "",
                program: "",
                address: "",
                phone: "",
                email: "",
                cellPhone: "",
                gender: "",
                elearningEquipment: "",
                highestEducation: "",
                nursingDegree: ""
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
                <h1 className="mb-4">GGA Training Registration Form</h1>
            
                <div className="row mt-5">
                    <div className="col-md-12">
                    <h3>General Information</h3>


                    <form className="mt-3" onSubmit={(event) => handleSubmit(event)}>
                        {/* Last Name and First Name and MI */}
                        <div className="row">
                            <div className="col-md-4">
                                <label>Last Name</label>
                                <input value={lastName} onChange={handleChange('lastName')} type="text" className="form-control" placeholder="Last Name" required/>
                            </div>
                            <div className="col-md-4">
                            <label>First Name</label>
                                <input value={firstName} onChange={handleChange('firstName')} type="text" className="form-control" placeholder="First Name" required/>
                            </div>

                            <div className="col-md-4">
                            <label>MI</label>
                                <input value={MI} onChange={handleChange('MI')} type="text" className="form-control" placeholder="M.I" required/>
                            </div>
                        </div>

                        {/* Program & phone & email */}
                        <div className="row">
                            <div className="col-md-4">
                                <label>Which Program are you enrolling?</label>
                                <select value={program} onChange={handleChange('program')} className="form-control" required>
                                    <option value="" value="">select option</option>
                                    <option value="NCLEX">NCLEX</option>
                                    <option value="IELTS">IELTS</option>
                                </select>
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


                         {/* Cell Phone, Date of Birth, Gender */}
                         <div className="row">
                            <div className="col-md-4">
                                <label>Cell Phone</label>
                                <input value={cellPhone} onChange={handleChange('cellPhone')} type="text" className="form-control" placeholder="Cell Phone" required/>
                            </div>
                            <div className="col-md-4">
                            <label style={{display: 'block'}}>Date of Birth</label>
                            <DatePicker placeholderText="Date Of Birth" className="form-control" selected={dob} onChange={date => setDob(date)} required/>
                            </div>
                            <div className="col-md-4">
                            <label style={{display: 'block'}}>Gender</label>
                                <select value={gender} onChange={handleChange('gender')} className="form-control" required>
                                    <option value="">select option</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="row">
                            <div className="col-md-12">
                                <label>Address</label>
                                <textarea value={address} onChange={handleChange('address')} className="form-control" placeholder="Address"></textarea>
                            </div>
                        </div>
                        
                        {/* Elearning Information */}
                        <div className="row">
                            <div className="col-md-12">
                            <h3>E-Learning Information</h3>
                            <p>GGA training is in a hybrid format and requires supportive electronic equipment. Do you have
                                Reliable equipment (Laptops) and internet for the e-learning?</p>

                            <select value={elearningEquipment} onChange={handleChange('elearningEquipment')} className="form-control" required>
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                            </select>
                            </div>
                        </div>


                        {/* Academic Information */}
                        <div className="row">
                            <div className="col-md-12">
                            <h3>Academic Information</h3>
                            
                             <div className="row">
                                 <div className="col-md-6">
                                 <label>Highest Educational Level Completed</label>
                                <input value={highestEducation} onChange={handleChange('highestEducation')} type="text" className="form-control" placeholder="Highest Educational Level" required/>
                                 </div>


                                 <div className="col-md-6">
                                 <label>Do you have a School of Nursing Degree/Diploma or in Final Year?</label>
                                 <select value={nursingDegree} onChange={handleChange('nursingDegree')} className="form-control" required>
                                    <option value="">select option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                 </select>
                                 </div>
                             </div>
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

export default trainingRegistration
