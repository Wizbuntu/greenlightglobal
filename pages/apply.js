// import useState 
import {useState} from 'react'

// import StepWizard form
import StepWizard from "react-step-wizard";

// import axios 
import axios from 'axios'

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

  // init militaryServiceForm 
  const militaryServiceForm = (_militaryServiceData) => {
    // update applyData State
    setApplyData({...applyData, 'militaryService': _militaryServiceData})

    console.log(applyData)
  }

  // init submitForm 
  const submitForms = (_finalData) => {
    // update applyData state 
    setApplyData({...applyData, 'applicantDeclaration': _finalData})

    // 
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
                <MilitaryService militaryServiceForm = {(_militaryService) => militaryServiceForm(_militaryService)}/> 
                <ProfessionalLicensure submitForms = {(_finalData) => submitForms(_finalData)}/>
            </StepWizard>
         
        </div>
      </section>
    </div>
  )
}
export default Apply
