import {Fragment, useState} from 'react'

// toaster
import toast, { Toaster } from 'react-hot-toast';


const professionalLicensure = (props) => {

    // init workSchedule state
    const [workSchedule, setWorkSchedule] = useState({
        hoursDesired: '',
        shiftsAvailable: '',
        daysAvailable: ''
    })

    // destructure workSchedule 
    const {hoursDesired, shiftsAvailable, daysAvailable} = workSchedule

    // init applicantDeclaration 
    const [applicantDeclaration, setApplicantDeclaration] = useState({
        aboveSixteen: '',
        validLicense: '',
        cprCertification: '',
        physicalTest: '',
        excludedFromMedicare: '',
        excludedFromMedicareExplain: '',
        disciplinedByProfessionalBoard: '',
        disciplinedByProfessionalBoardExplain: ''

    })

    // destructure 
    const {aboveSixteen, validLicense, cprCertification, physicalTest, excludedFromMedicare, excludedFromMedicareExplain, disciplinedByProfessionalBoard, disciplinedByProfessionalBoardExplain} = applicantDeclaration


    // init handleWorkSchedule 
    const handleWorkSchedule = (data) => (event) => {
        // update workScheduleState 
        setWorkSchedule({...workSchedule, [data]: event.target.value})

        console.log(workSchedule)
    }


    // handleApplicantDeclaration
    const handleApplicantDeclaration = (data) => (event) => {
        // update applicationDeclarationState 
        setApplicantDeclaration({...applicantDeclaration, [data]: event.target.value})

        console.log(applicantDeclaration)
    }

    // init handleNext
    const handleNext = () => {

        // validate workSchedule
        if(!(hoursDesired && shiftsAvailable && daysAvailable)) {
            return toast.error("Some fields are empty, please check")
        }

        // validate applicantDeclaration
        if(!(aboveSixteen && validLicense && cprCertification && physicalTest && excludedFromMedicare && disciplinedByProfessionalBoard)) {
            return toast.error("Some fields are empty, please check")
        }

        // get _finalData 
        const _finalData = {
            ...workSchedule,
            ...applicantDeclaration
        }

        // pass data to parent component 
        props.submitForms(_finalData)
    }

    // init handlePrevious
    const handlePrevious = () => {
        props.previousStep()
    }

    return (
        <Fragment>

                <section className="contact">
                    <div className="container mt-4">
                            <Toaster/>
                        <div className="row">
                            <div className="col-md-12">
                            <form action="home-01.html">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Hours Desired</label>
                                        <select value={hoursDesired} onChange={handleWorkSchedule('hoursDesired')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="40/Wk">40/Wk</option>
                                            <option value="less than 40/Wk">less than 40/Wk</option>
                                            <option value="on call">on Call</option>
                                            <option value="Any">Any</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                     <div className="form-group">
                                        <label>Shifts Available</label>
                                        <select value={shiftsAvailable} onChange={handleWorkSchedule('shiftsAvailable')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="Days">Days</option>
                                            <option value="Evenings">Evenings</option>
                                            <option value="Nights">Nights</option>
                                            <option value="Any">Any</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Days Available */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Days Available</label>
                                        <input value={daysAvailable} onChange={handleWorkSchedule('daysAvailable')} type="text" className="form-control mb-0" placeholder="example: Monday, Tuesday, Wednesday"/>
                                        <small>Enter your preferred available days seperated by commas</small>
                                    </div>
                                </div>
                               
                            </form>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Professional Licensure */}
                <section className="contact">
                    <div className="container mt-4">
                        <h1 className="mb-4">Applicant Declaration</h1>
                     
                        <div className="row">
                            <div className="col-md-12">
                            <form action="home-01.html">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Are you 16 or older?</label>
                                        <select value={aboveSixteen} onChange={handleApplicantDeclaration('aboveSixteen')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                     <div className="form-group">
                                        <label>Do you have a valid RN/ LPN/ CAN License?</label>
                                        <select value={validLicense} onChange={handleApplicantDeclaration('validLicense')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>      
                                        </select>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Do you have a valid CPR certification?</label>
                                        <select value={cprCertification} onChange={handleApplicantDeclaration('cprCertification')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                     <div className="form-group">
                                        <label>Do you have a current physical/ Mantoux test?</label>
                                        <select  value={physicalTest} onChange={handleApplicantDeclaration('physicalTest')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>      
                                        </select>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Have you ever been excluded from the Medicare or Medicaid program for conduct that would constitute a misdemeanor, gross misdemeanor or a felony under the law?</label>
                                        <select value={excludedFromMedicare} onChange={handleApplicantDeclaration('excludedFromMedicare')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        {excludedFromMedicare === 'yes' && <div className="form-group">
                                        <label>If yes, explain</label>
                                        <textarea value={excludedFromMedicareExplain} onChange={handleApplicantDeclaration('excludedFromMedicareExplain')} className="form-control" cols="8" rows="8" style={{height: 100}} placeholder="If yes, explain" required></textarea>
                                    </div>}
                                     
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-6">
                                       
                                        <div className="form-group">
                                        <label>Have you ever been disciplined by professional or state ethics or licensing board?</label>
                                        <select value={disciplinedByProfessionalBoard} onChange={handleApplicantDeclaration('disciplinedByProfessionalBoard')} className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                    {disciplinedByProfessionalBoard === 'yes' &&  <div className="form-group">
                                        <label>If yes, explain</label>
                                        <textarea value={disciplinedByProfessionalBoardExplain} onChange={handleApplicantDeclaration('disciplinedByProfessionalBoardExplain')}  className="form-control" cols="8" rows="8" style={{height: 100}} placeholder="If yes, explain" required></textarea>
                                    </div>}
                                    
                                    </div>
                                </div>




                                
                               
                                <div className="container">
                                <button type="button" onClick={() => handlePrevious()} className="btn btn-success ml-auto">Previous</button>
                                <button type="button" onClick={() => handleNext()} className="btn btn-success " style={{float: "right"}}>Submit</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </section>
            
        </Fragment>
    )
}

export default professionalLicensure
