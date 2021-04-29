// import useState 
import {useState} from 'react'

// import StepWizard form
import StepWizard from "react-step-wizard";

// Applicant Information
import ApplicantInformation from '../components/ApplicationForm/applicantInformation'


// Education Form
import EducationForm from '../components/ApplicationForm/educationForm'


// Reference Form
import ReferenceForm from '../components/ApplicationForm/referenceForm'


// Previous Employment
import PreviousEmployment from '../components/ApplicationForm/previousEmploymentForm'

// Military Service
import MilitaryService from '../components/ApplicationForm/militaryService'

// Military Service
import ProfessionalLicensure from '../components/ApplicationForm/professionalLicensure'


// init apply form page
const Apply = () => {

  // inti applyData state
  const [applyData, setApplyData] = useState({})

  // init applicantInformation 
  const applicantInformation = (_applicantInfo) => {
    // update applyData state
    setApplyData({...applyData, 'applicantInformation': _applicantInfo})
    console.log(applyData)
  }

  // init educationFormData 
  const educationFormData = (_educationData) => {
    // update applyData state 
    setApplyData({...applyData, 'educationFormData': _educationData})
    console.log(applyData)
  }

  // init referenceFormData
  const referenceFormData = (_referenceData) => {
    // update applyData state 
    setApplyData({...applyData, 'referenceData': _referenceData})
    console.log(applyData)
  }

  // init previousEmployment
  const previousEmployment = (_previousEmployment) => {
    // update applyData state
    setApplyData({...applyData, 'previousEmploymentData': _previousEmployment})

    console.log(applyData)
  }


  return (
    <div>
      <section className="banner" style={{backgroundColor: "inherit"}}>
        <div className="container">
         
            <StepWizard>
                <ApplicantInformation applicantInformation = {(_applicantInfo) => applicantInformation(_applicantInfo)}/>
                <EducationForm educationFormData = {(_educationData => educationFormData(_educationData))}/>
                <ReferenceForm referenceFormData = {(_referenceData) => referenceFormData(_referenceData)}/>
                <PreviousEmployment previousEmployment = {(_previousEmployment) => previousEmployment(_previousEmployment)}/>   
                <MilitaryService/> 
                <ProfessionalLicensure/>
            </StepWizard>
         
        </div>
      </section>
    </div>
  )
}
export default Apply
