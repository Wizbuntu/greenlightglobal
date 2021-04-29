// import useState
import {useState} from 'react'

// toaster
import toast, { Toaster } from 'react-hot-toast';


// init Education Form componet
const educationForm = (props) => {

    // init educationData state 
    const [educationData, setEducationData] = useState({
        highSchool: "",
        highSchoolAddress: "",
        highSchoolFrom: "",
        highSchoolTo: "",
        didYouGraduateHighSchool: "",
        college: "",
        collegeAddress: "",
        collegeFrom: "",
        collegeTo: "",
        didYouGraduateCollege: "",
        other: "",
        otherAddress: "",
        otherFrom: "",
        otherTo: "",
        didYouGraduateOther: ""
    })

    // destructure educationData
    const {highSchool, highSchoolAddress, highSchoolFrom, highSchoolTo, didYouGraduateHighSchool, college, collegeAddress, collegeFrom, collegeTo, didYouGraduateCollege, other, otherAddress, otherFrom, otherTo, didYouGraduateOther} = educationData


    // init handleChange
    const handleChange = (data) => (event) => {
        // update educationData state
        setEducationData({...educationData, [data]: event.target.value})
        console.log(educationData)
    }

    // init hanleNext
    const handleNext = () => {

        // get _educationData 
        const _educationData = {
            ...educationData
        }

        // validate 
        if(!(highSchool && highSchoolAddress && highSchoolFrom && highSchoolTo && didYouGraduateHighSchool)) {
            return toast.error("Some fields are empty, please check")
        }

        if(!(college && collegeAddress && collegeFrom && collegeTo && didYouGraduateCollege)) {
            return toast.error("Some fields are empty, please check")
        }

        if(!(other && otherAddress && otherFrom && otherTo && didYouGraduateOther)) {
            return toast.error("Some fields are empty, please check")
        }


        // pass _educationData to parent component 
        props.educationFormData(_educationData)


        // invoke nextStep func
        props.nextStep()
    }

    // init  handlePrevious 
    const handlePrevious = () => {
        props.previousStep()
    }

    return (
        <div>

        <section className="contact">
                    <div className="container">
                        <Toaster/>
                        <h1 className="mb-4">Education</h1>
                        <div className="row">
                            <div className="col-md-12">

                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                    <label>High school</label>
                                        <input value={highSchool} onChange={handleChange('highSchool')} type="text" className="form-control" placeholder="High School" />
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <label>Address</label>
                                        <input type="text" value={highSchoolAddress} onChange={handleChange('highSchoolAddress')} className="form-control" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="row">
                                   
                                    <div className="col-sm-4">
                                    <label>From</label>
                                        <input type="number" value={highSchoolFrom} onChange={handleChange('highSchoolFrom')} className="form-control" placeholder="Enter Year" />
                                    </div>
                                    <div className="col-sm-4">
                                    <label>To</label>
                                        <input type="number" value={highSchoolTo} onChange={handleChange('highSchoolTo')} className="form-control" placeholder="Enter Year" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Did you graduate?</label>
                                        <select onChange={handleChange('didYouGraduateHighSchool')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no" >No</option>
                                        </select>
                                    </div>
                                </div>


                                {/* College */}
                                <div className="row">
                                    <div className="col-sm-6">
                                    <label>College</label>
                                        <input value={college} onChange={handleChange('college')} type="text" className="form-control" placeholder="High School" />
                                    </div>
                                    <div className="col-sm-6">
                                    <label>Address</label>
                                        <input value={collegeAddress} onChange={handleChange('collegeAddress')} type="text" className="form-control" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                    <label>From</label>
                                        <input value={collegeFrom} onChange={handleChange('collegeFrom')} type="number" className="form-control" placeholder="Enter Year" />
                                    </div>
                                    <div className="col-sm-4">
                                    <label>To</label>
                                        <input value={collegeTo} onChange={handleChange('collegeTo')} type="number" className="form-control" placeholder="Enter Year" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Did you graduate?</label>
                                        <select onChange={handleChange('didYouGraduateCollege')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>


                                {/* Other */}
                                <div className="row">
                                    <div className="col-sm-6">
                                    <label>Other</label>
                                        <input value={other} onChange={handleChange('other')} type="text" className="form-control" placeholder="High School" />
                                    </div>
                                    <div className="col-sm-6">
                                    <label>Address</label>
                                        <input value={otherAddress} onChange={handleChange('otherAddress')} type="text" className="form-control" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                    <label>From</label>
                                        <input value={otherFrom} onChange={handleChange('otherFrom')} type="number" className="form-control" placeholder="Enter Year" />
                                    </div>
                                    <div className="col-sm-4">
                                    <label>To</label>
                                        <input value={otherTo} onChange={handleChange('otherTo')} type="number" className="form-control" placeholder="Enter Year" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Did you graduate?</label>
                                        <select onChange={handleChange('didYouGraduateOther')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>

                               
                                <div className="container">
                                <button type="button" onClick={() => handlePrevious()} className="btn btn-success ml-auto">Previous</button>
                                <button type="button" onClick={() => handleNext()} className="btn btn-success " style={{float: "right"}}>Next</button>
                                </div>
                               
                            </form>

                            </div>
                        </div>
                    </div>
        </section>
                     
            
        </div>
    )
}

export default educationForm
