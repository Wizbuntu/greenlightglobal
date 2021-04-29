import {Fragment} from 'react'

const militaryService = (props) => {

     // init hanleNext
     const handleNext = () => {
        props.nextStep()
    }

    // init  handlePrevious 
    const handlePrevious = () => {
        props.previousStep()
    }

    return (
        <Fragment>

                <section className="contact">
                    <div className="container mt-4">
                        <h1 className="mb-4">Military Service</h1>
                     
                        <div className="row">
                            <div className="col-md-12">

                            <form>
                                {/* Branch, From, To */}
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Branch</label>
                                        <input type="text" className="form-control" placeholder="Branch"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label>From</label>
                                        <input type="number" className="form-control"placeholder="From" />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>To</label>
                                        <input type="number" className="form-control"placeholder="To" />
                                    </div>
                                </div>

                                {/* Rank of Discharge and Type of Discharge */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Rank at Discharge</label>
                                        <input type="text" className="form-control" placeholder="Rank at Discharge"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Type of Discharge</label>
                                        <input type="number" className="form-control"placeholder="Type of Discharge" />
                                    </div>
                                    
                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <label>If other than honorable, explain</label>
                                    <textarea name="" className="form-control" placeholder="If other than honorable, explain"></textarea>
                                    </div>
                                </div>
                                
                            </form>


                            </div>
                        </div>
                    </div>


                    <div className="container mt-4">
                        <h1 className="mb-4">Next of Kin</h1>
                     
                        <div className="row">
                            <div className="col-md-12">

                            <form>
                                {/* First Name, Last Name and M.I */}
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label>First Name</label>
                                        <input type="number" className="form-control"placeholder="First Name" />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>M.I</label>
                                        <input type="text" className="form-control"placeholder="M.I." />
                                    </div>
                                </div>

                                {/* Street Address and Apartment Unit */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Street Address</label>
                                        <input type="text" className="form-control" placeholder="Street Address"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Apartment/Unit</label>
                                        <input type="text" className="form-control"placeholder="Apartment/Unit" />
                                    </div>
                                    
                                </div>

                                {/* City State and Zip */}
                                <div className="row">
                                    <div className="col-md-4">
                                        <label>City</label>
                                        <input type="text" className="form-control"placeholder="City" />
                                    </div>

                                    <div className="col-md-4">
                                        <label>State</label>
                                        <input type="text" className="form-control"placeholder="State" />
                                    </div>

                                    <div className="col-md-4">
                                        <label>Zip</label>
                                        <input type="text" className="form-control"placeholder="Zip" />
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
            
        </Fragment>
    )
}

export default militaryService
