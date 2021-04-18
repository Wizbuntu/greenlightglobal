// import StepWizard form
import StepWizard from "react-step-wizard";

// Applicant Information
import ApplicantInformation from '../components/ApplicationForm/applicantInformation'

// init apply form page
const Apply = (props) => {
  return (
    <div>
      <section className="banner">
        <div className="container">
         
            <StepWizard>
                <ApplicantInformation/>
            </StepWizard>
         
        </div>
      </section>
    </div>
  )
}

export default Apply
