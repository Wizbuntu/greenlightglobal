import {Fragment, useState} from 'react'

// react coutry state selector
import {RegionDropdown, CountryRegionData } from 'react-country-region-selector';

// toaster
import toast, { Toaster } from 'react-hot-toast';


const militaryService = (props) => {


    // init militaryServiceData state
    const [militaryServiceData, setMilitaryServiceData] = useState({
        branch: '',
        from: '',
        to: '',
        rankAtDischarge: '',
        typeOfDischarge: '',
        ifAnyOtherThanHonourableExplain: ''
    })

    // destructure militaryService
    const {branch, from, to, rankAtDischarge, typeOfDischarge, ifAnyOtherThanHonourableExplain} = militaryServiceData

    // init nextOfKin state 
    const [nextOfKin, setNextOfKin] = useState({
        lastName: '',
        firstName: '',
        MI: '',
        streetAddress: '',
        apartment: '',
        city: '',
        zipCode: ''
    })

    // init usaState 
    const [usaState, setUsaState] = useState("")

    // destructure nextOfKin
    const {lastName, firstName, MI, streetAddress, apartment, city, zipCode} = nextOfKin


    // init handle militaryService Change
    const militaryServiceChange =(data) => (event) => {
        // update militaryService state 
        setMilitaryServiceData({...militaryServiceData, [data]: event.target.value})

        console.log(militaryServiceData)
    }

    // handle nextOfKinChange
    const handleNextOfKinChange = (data) => (event) => {
        setNextOfKin({...nextOfKin, [data]: event.target.value})
        console.log(nextOfKin)
    }

     // init hanleNext
     const handleNext = () => {

        // validate nextOfKin 
        if(!(firstName && lastName && streetAddress && apartment && city && usaState && zipCode)) {
            return toast.error("Some fields are empty, please check")
        }

        // get _militaryServiceData
        const _militaryService = {
            ...militaryServiceData,
            "nextOfKin": {...nextOfKin},
            usaState: usaState
        }

         // pass data to parent component 
        props.militaryServiceForm(_militaryService)

       
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
                    <div className="container mt-4">
                        <Toaster/>
                        <h1 className="mb-4">Military Service</h1>
                     
                        <div className="row">
                            <div className="col-md-12">

                            <form>
                                {/* Branch, From, To */}
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label>Branch</label>
                                        <input value={branch} onChange={militaryServiceChange('branch')} type="text" className="form-control" placeholder="Branch"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label>From</label>
                                        <input value={from} onChange={militaryServiceChange('from')} type="number" className="form-control"placeholder="From" />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>To</label>
                                        <input value={to} onChange={militaryServiceChange('to')} type="number" className="form-control"placeholder="To" />
                                    </div>
                                </div>

                                {/* Rank of Discharge and Type of Discharge */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Rank at Discharge</label>
                                        <input value={rankAtDischarge} onChange={militaryServiceChange('rankAtDischarge')} type="text" className="form-control" placeholder="Rank at Discharge"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Type of Discharge</label>
                                        <input value={typeOfDischarge} onChange={militaryServiceChange('typeOfDischarge')} type="text" className="form-control"placeholder="Type of Discharge" />
                                    </div>
                                    
                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <label>If other than honorable, explain</label>
                                    <textarea value={ifAnyOtherThanHonourableExplain} onChange={militaryServiceChange('ifAnyOtherThanHonourableExplain')} className="form-control" placeholder="If other than honorable, explain"></textarea>
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
                                        <input value={lastName} onChange={handleNextOfKinChange('lastName')} type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label>First Name</label>
                                        <input value={firstName} onChange={handleNextOfKinChange('firstName')} type="text" className="form-control"placeholder="First Name" />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>M.I</label>
                                        <input value={MI} onChange={handleNextOfKinChange('MI')} type="text" className="form-control"placeholder="M.I." />
                                    </div>
                                </div>

                                {/* Street Address and Apartment Unit */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Street Address</label>
                                        <input value={streetAddress} onChange={handleNextOfKinChange('streetAddress')} type="text" className="form-control" placeholder="Street Address"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Apartment/Unit</label>
                                        <input value={apartment} onChange={handleNextOfKinChange('apartment')} type="text" className="form-control"placeholder="Apartment/Unit" />
                                    </div>
                                    
                                </div>

                                {/* City State and Zip */}
                                <div className="row">

                                <div className="col-md-4">
                                        <label>State</label>
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
                                        <input value={city} onChange={handleNextOfKinChange('city')} type="text" className="form-control"placeholder="City" />
                                    </div>

                                    

                                    <div className="col-md-4">
                                        <label>Zip</label>
                                        <input value={zipCode} onChange={handleNextOfKinChange('zipCode')} type="text" className="form-control"placeholder="Zip" />
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
