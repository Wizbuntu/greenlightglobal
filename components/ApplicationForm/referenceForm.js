// import useState 
import {Fragment, useState} from 'react'

// toaster
import toast, { Toaster } from 'react-hot-toast';


// init referenceForm component
const referenceForm = (props) => {

    // init referenceData state 
    const [referenceData, setReferenceData] = useState({
        reference1FullName: "",
        reference1Relationship: "",
        reference1Company: "",
        reference1Phone: "",
        reference1Address: "",
        reference2FullName: "",
        reference2Relationship: "",
        reference2Company: "",
        reference2Phone: "",
        reference2Address: "",
        reference3FullName: "",
        reference3Relationship: "",
        reference3Company: "",
        reference3Phone: "",
        reference3Address: "",


    })

    // destructure referenceData
    const {
        reference1FullName, 
        reference1Relationship,
        reference1Company, 
        reference1Phone, 
        reference1Address,
        reference2FullName, 
        reference2Relationship,
        reference2Company, 
        reference2Phone, 
        reference2Address,
        reference3FullName, 
        reference3Relationship,
        reference3Company, 
        reference3Phone, 
        reference3Address,

    
    } = referenceData


    // init handleChange 
    const handleChange =(data) => (event) => {
        // update referenceData
        setReferenceData({...referenceData, [data]: event.target.value})

        console.table(referenceData)
    }

    // init hanleNext
     const handleNext = () => {

        // init _referenceData 
        const _referenceData = {
            ...referenceData
        }    

        // validate reference Data
        for(let reference of Object.keys(referenceData)) {
            // check if any field is empty
            if(!referenceData[reference]) {
                return toast.error("Some fields are empty, please check")
            }
        }

        // pass _referenceData to parent component 
        props.referenceFormData(_referenceData)

        // invoke nextStep func
        props.nextStep()
    }

    // init  handlePrevious 
    const handlePrevious = () => {
        props.previousStep()
    }

    return (
        <Fragment>
                <section className="contact">
                    <div className="container">
                        <Toaster/>
                        <h1 className="mb-4">Reference</h1>
                        <p>Please list three professional references</p>
                        <div className="row">
                            <div className="col-md-12">
                            <form>
                                <p><b>Reference 1</b></p>
                                {/* FullName and Relationship */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Full Name</label>
                                        <input type="text" value={reference1FullName} onChange={handleChange('reference1FullName')} className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Relationship</label>
                                        <input value={reference1Relationship} onChange={handleChange('reference1Relationship')} type="text" className="form-control" placeholder="Relationship" />
                                    </div>
                                </div>

                                {/* Company and Phone */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Company</label>
                                        <input value={reference1Company} onChange={handleChange('reference1Company')} type="text" className="form-control" id="" placeholder="Full Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Phone</label>
                                        <input value={reference1Phone} onChange={handleChange('reference1Phone')} type="number" className="form-control" id="" placeholder="Phone Number" />
                                    </div>
                                </div>

                                {/* Refernce Address */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Address</label>
                                    <textarea value={reference1Address} onChange={handleChange('reference1Address')} className="form-control" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                


                                {/* Reference 2 */}
                                <p><b>Reference 2</b></p>
                                {/* FullName and Relationship */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Full Name</label>
                                        <input value={reference2FullName} onChange={handleChange('reference2FullName')} type="text" className="form-control" id="" placeholder="Full Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Relationship</label>
                                        <input value={reference2Relationship} onChange={handleChange('reference2Relationship')} type="text" className="form-control" id="" placeholder="Relationship" />
                                    </div>
                                </div>

                                {/* Company and Phone */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Company</label>
                                        <input value={reference2Company} onChange={handleChange('reference2Company')} type="text" className="form-control" id="" placeholder="Full Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Phone</label>
                                        <input value={reference2Phone} onChange={handleChange('reference2Phone')} type="number" className="form-control" id="" placeholder="Phone Number" />
                                    </div>
                                </div>

                                {/* Refernce Address */}
                                <textarea value={reference2Address} onChange={handleChange('reference2Address')} className="form-control" placeholder="Address"></textarea>




                                 {/* Reference 3 */}
                                 <p><b>Reference 3</b></p>
                                {/* FullName and Relationship */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Full Name</label>
                                        <input value={reference3FullName} onChange={handleChange('reference3FullName')} type="text" className="form-control" id="" placeholder="Full Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Relationship</label>
                                        <input value={reference3Relationship} onChange={handleChange('reference3Relationship')} type="text" className="form-control" id="" placeholder="Relationship" />
                                    </div>
                                </div>

                                {/* Company and Phone */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Company</label>
                                        <input value={reference3Company} onChange={handleChange('reference3Company')} type="text" className="form-control" id="" placeholder="Full Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Phone</label>
                                        <input value={reference3Phone} onChange={handleChange('reference3Phone')} type="number" className="form-control" id="" placeholder="Phone Number" />
                                    </div>
                                </div>

                                {/* Refernce Address */}
                                <textarea value={reference3Address} onChange={handleChange('reference3Address')} className="form-control" placeholder="Address"></textarea>




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

export default referenceForm
