import {Fragment} from 'react'

const professionalLicensure = (props) => {


    // init handleNext
    const handleNext = () => {
        props.nextStep()
    }

    // init handlePrevious
    const handlePrevious = () => {
        props.previousStep()
    }

    return (
        <Fragment>

                <section className="contact">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-12">
                            <form action="home-01.html">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Hours Desired</label>
                                        <select className="form-control">
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
                                        <select className="form-control">
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
                                        <input type="text" className="form-control mb-0" placeholder="example: Monday, Tuesday, Wednesday"/>
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
                                        <select className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                     <div className="form-group">
                                        <label>Do you have a valid RN/ LPN/ CAN License?</label>
                                        <select className="form-control">
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
                                        <select className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                     <div className="form-group">
                                        <label>Do you have a current physical/ Mantoux test?</label>
                                        <select className="form-control">
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
                                        <select className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                     <div className="form-group">
                                        <label>If yes, explain</label>
                                        <textarea className="form-control" cols="8" rows="8" style={{height: 100}} placeholder="If yes, explain" required></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label>Have you ever been disciplined by professional or state ethics or licensing board?</label>
                                        <select className="form-control">
                                            <option value="">select option</option>
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                            
                                        </select>
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                     <div className="form-group">
                                        <label>If yes, explain</label>
                                        <textarea className="form-control" cols="8" rows="8" style={{height: 100}} placeholder="If yes, explain" required></textarea>
                                        </div>
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
