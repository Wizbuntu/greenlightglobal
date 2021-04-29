import {Fragment, useState} from 'react'



const previousEmploymentForm = (props) => {

    // init dynamicForm state
    const [dynamicForm, setDynamicForm] = useState([
        {
            company: "",
            phone: "",
            address: "",
            supervisor: "",
            jobTitle: "",
            startingSalary: "",
            endingSalary: "",
            responsibilities: "",
            from: "",
            to: "",
            reasonForLeaving: "",
            mayWeContactYourSupervisor: ""
    
        }
    ])

     // init hanleNext
     const handleNext = () => {

        // get _previousEmploymentFormData 
        const _previousEmploymentFormData = [
            ...dynamicForm
        ]

        // validate dynamicForm data
        

        // invoke nextStep func
        props.nextStep()
    }

    // init  handlePrevious 
    const handlePrevious = () => {
        props.previousStep()
    }

    // init handleChange 
    const handleChange =(index, data, e) => {
        // spread form objects in dynamicForm state
        const _dynamicForms = [...dynamicForm]

        // get form index and update property [computed property]
        _dynamicForms[index][data] = e.target.value

        // update dynamicForm state
        setDynamicForm(_dynamicForms)

        console.log(dynamicForm)
    }

    // init add Dynamic Form
    const addDynamicForm = (index) => {
        // spread form object in dynamicForm state
        const _dynamicForm = [...dynamicForm]

        // init new form object
        const newFormObject = {
            company: "",
            phone: "",
            address: "",
            supervisor: "",
            jobTitle: "",
            startingSalary: "",
            endingSalary: "",
            responsibilities: "",
            from: "",
            to: "",
            reasonForLeaving: "",
            mayWeContactYourSupervisor: ""
        }

        // push newFormObject to dynamicForm array
        _dynamicForm.push(newFormObject)

        // update dynamicForm state 
        setDynamicForm(_dynamicForm)

    }


    // init removeDynamicForm
    const removeDynamicForm = (index) => {
        // spread form object in dynamicForm state
        const _dynamicForm =  [...dynamicForm]

        // splice formObject by index
        _dynamicForm.splice(index, 1)

        // update dynamicForm state 
        setDynamicForm(_dynamicForm)
    }


    return (
        <Fragment>
               
                <section className="contact">
                    <div className="container mt-4">
                        <h1 className="mb-4">Previous Employment</h1>
                     
                        <div className="row">
                            <div className="col-md-12">
                            <form>
                                <Fragment>
                                {dynamicForm.map((dForm, index) => {
                                    return <Fragment key={index}>
                                             {/* Company and Phone */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Company</label>
                                        <input onChange={(event) => handleChange(index, 'company', event)} type="text" className="form-control" placeholder="Company " />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Phone</label>
                                        <input onChange={(event) => handleChange(index, 'phone', event)} type="number" className="form-control" placeholder="Phone" />
                                    </div>
                                </div>

                                 {/* Address and Supervisor */}
                                 <div className="row">
                                    <div className="col-sm-6">
                                    <label>Address</label>
                                        <input onChange={(event) => handleChange(index, 'address', event)} type="text" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="col-sm-6">
                                    <label>Supervisor</label>
                                        <input onChange={(event) => handleChange(index, 'supervisor', event)} type="text" className="form-control" placeholder="Supervisor" />
                                    </div>
                                </div>

                                 {/* Job title, starting salary and ending salary */}
                                 <div className="row">
                                    <div className="col-sm-4">
                                    <label>Job Title</label>
                                        <input onChange={(event) => handleChange(index, 'jobTitle', event)} type="text" className="form-control" placeholder="Job Title" />
                                    </div>
                                    <div className="col-sm-4">
                                    <label>Starting Salary ($)</label>
                                        <input  onChange={(event) => handleChange(index, 'startingSalary', event)} type="text" className="form-control" placeholder="Starting Salary" />
                                    </div>
                                    <div className="col-sm-4">
                                    <label>Ending Salary ($)</label>
                                        <input onChange={(event) => handleChange(index, 'endingSalary', event)} type="text" className="form-control" placeholder="Ending Salary" />
                                    </div>
                                </div>

                                 {/* Responsibilities, from and to*/}
                                 <div className="row">
                                    <div className="col-md-4">
                                        <label>Responsibilities</label>
                                    <input type="text" onChange={(event) => handleChange(index, 'responsibilities', event)} className="form-control" placeholder="Responsibilities"/>
                                    </div>

                                    <div className="col-md-4">
                                        <label>From</label>
                                    <input type="number"  onChange={(event) => handleChange(index, 'from', event)} className="form-control" placeholder="Enter Year"/>
                                    </div>

                                    <div className="col-md-4">
                                        <label>To</label>
                                        <input type="number" onChange={(event) => handleChange(index, 'to', event)} className="form-control" placeholder="Enter Year"/>
                                    </div>
                                </div>

                                {/* Reason for leaving and may we contact supervisor*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Reason for Leaving</label>
                                        <textarea onChange={(event) => handleChange(index, 'reasonForLeaving', event)} className="form-control" placeholder="Reason for leaving"></textarea>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <label>May we contact your previous supervisor for a reference?</label>
                                        <select onChange={(event) => handleChange(index, 'mayWeContactYourSupervisor', event)} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        </div>
                                    </div>
                                    
                                    {/* add and remove form button */}
                                    <div className="col-md-6">
                                        <button className="btn btn-secondary" type="button" onClick={() => addDynamicForm(index)} style={{marginTop: 36}}><i className="ti ti-plus"></i> Add Employment</button>
                                        <button className="btn btn-danger" type="button" onClick={() => removeDynamicForm(index)} style={{marginTop: 36}}><i className="ti ti-trash"></i> Remove Employment</button>
                                    </div>
                                </div>

                                    </Fragment>
                                })}

                                </Fragment>
                               
                                <div className="container">
                                <button type="button" onClick={() => handlePrevious()} className="btn btn-success ml-auto">Previous</button>
                                <button type="button" onClick={() => handleNext()} className="btn btn-success " style={{float: "right"}}>Next</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </section>
            
        </Fragment>
    )
}

export default previousEmploymentForm
