// import smtpTransport 
import smtpTransport from '../../util/smtpTransport'


export default (req, res) => {
    // check if post request 
    if (req.method === 'POST') {

        const data = req.body

        // get apply data 
        if (data) {

            // init htmlBody 
            const htmlBody = `
                <h2> Applicant Information </h2>
                <p><b>Last Name:</b> ${data.applicantInformation.lastName}</p>
                <p><b>First Name:</b> ${data.applicantInformation.firstName}</p>
                <p><b>M.I:</b> ${data.applicantInformation.mi}</p>
                <p><b>Date:</b> ${new Date(data.applicantInformation.startDate)}</p>
                <p><b>Street Address:</b> ${data.applicantInformation.streetAddress}</p>
                <p><b>Appartment/Unit:</b> ${data.applicantInformation.apartment}</p>
                <p><b>State:</b> ${data.applicantInformation.usaState}</p>
                <p><b>City:</b> ${data.applicantInformation.city}</p>
                <p><b>Zip code:</b> ${data.applicantInformation.zipcode}</p>
                <p><b>Phone:</b> ${data.applicantInformation.phone}</p>
                <p><b>Email:</b> ${data.applicantInformation.email}</p>
                <p><b>Date Applied:</b> ${new Date(data.applicantInformation.dateApplied)}</p>
                <p><b>Social Security Number:</b> ${data.applicantInformation.socialSecurityNumber}</p>
                <p><b>Desired Salary:</b> ${data.applicantInformation.desiredSalary}</p>
                <p><b>Position Applied For:</b> ${data.applicantInformation.positionAppliedFor}</p>
                <p><b>Are you a citizen of the United States?:</b> ${data.applicantInformation.citizenOfUSA}</p>
                <p><b>Have you ever worked for this company?:</b> ${data.applicantInformation.haveYouWorkedForThisCompany}</p>
                <p><b>If so, when:</b> ${data.applicantInformation.whenDidYouWorkForThisCompany}</p>
                <p><b>Have you ever been convicted of a felony?:</b> ${data.applicantInformation.beenConvictedOfAFelony}</p>
                <p><b>If yes, explain:</b> ${data.applicantInformation.explainWhyYouWereConvicted}</p>
                
                <br/>
                <h2> Education </h2>
                <p><b>High School:</b> ${data.educationFormData.highSchool}</p>
                <p><b>Address:</b> ${data.educationFormData.highSchoolAddress}</p>
                <p><b>From:</b> ${data.educationFormData.highSchoolFrom}</p>
                <p><b>To:</b> ${data.educationFormData.highSchoolTo}</p>
                <p><b>Did you graduate?:</b> ${data.educationFormData.didYouGraduateHighSchool}</p>
                <p><b>College:</b> ${data.educationFormData.college}</p>
                <p><b>Address:</b> ${data.educationFormData.collegeAddress}</p>
                <p><b>From:</b> ${data.educationFormData.collegeFrom}</p>
                <p><b>To:</b> ${data.educationFormData.collegeTo}</p>
                <p><b>Did you graduate?:</b> ${data.educationFormData.didYouGraduateCollege}</p>
                <p><b>Other:</b> ${data.educationFormData.other}</p>
                <p><b>Address:</b> ${data.educationFormData.otherAddress}</p>
                <p><b>From:</b> ${data.educationFormData.otherFrom}</p>
                <p><b>To:</b> ${data.educationFormData.otherTo}</p>
                <p><b>Did you graduate?:</b> ${data.educationFormData.didYouGraduateOther}</p>

                <br/>
                <h2> Reference </h2>
                <h3>Reference 1 </h3>
                <p><b>Full Name:</b> ${data.referenceData.reference1FullName}</p>
                <p><b>Relationship:</b> ${data.referenceData.reference1Relationship}</p>
                <p><b>Company:</b> ${data.referenceData.reference1Company}</p>
                <p><b>Phone:</b> ${data.referenceData.reference1Phone}</p>
                <p><b>Address:</b> ${data.referenceData.reference1Address}</p>
                <br/>
                <h3>Reference 2 </h3>
                <p><b>Full Name:</b> ${data.referenceData.reference2FullName}</p>
                <p><b>Relationship:</b> ${data.referenceData.reference2Relationship}</p>
                <p><b>Company:</b> ${data.referenceData.reference2Company}</p>
                <p><b>Phone:</b> ${data.referenceData.reference2Phone}</p>
                <p><b>Address:</b> ${data.referenceData.reference2Address}</p>
                <br/>
                <h3>Reference 3 </h3>
                <p><b>Full Name:</b> ${data.referenceData.reference3FullName}</p>
                <p><b>Relationship:</b> ${data.referenceData.reference3Relationship}</p>
                <p><b>Company:</b> ${data.referenceData.reference3Company}</p>
                <p><b>Phone:</b> ${data.referenceData.reference3Phone}</p>
                <p><b>Address:</b> ${data.referenceData.reference3Address}</p>


                <br/>
                <h2> Previous Employment </h2>
                ${data.previousEmploymentData.map((employmentData, index) => {
                   return `
                    <p><b>Company:</b> ${employmentData.company}</p>
                    <p><b>Phone:</b> ${employmentData.phone}</p>
                    <p><b>Address:</b> ${employmentData.address}</p>
                    <p><b>Supervisor:</b> ${employmentData.supervisor}</p>
                    <p><b>Job Title:</b> ${employmentData.jobTitle}</p>
                    <p><b>Starting Salary:</b> ${employmentData.startingSalary}</p>
                    <p><b>Ending Salary:</b> ${employmentData.endingSalary}</p>
                    <p><b>Responsibilities:</b> ${employmentData.responsibilities}</p>
                    <p><b>From:</b> ${employmentData.from}</p>
                    <p><b>To:</b> ${employmentData.to}</p>
                    <p><b>Reason for Leaving:</b> ${employmentData.reasonForLeaving}</p>
                    <p><b>May we contact your previous supervisor for a reference?:</b> ${employmentData.mayWeContactYourSupervisor}</p>
                    
                    `
                })}



                <br/>
                <h2> Military Service </h2>
                <p><b>Branch:</b> ${data.militaryService.branch}</p>
                <p><b>From:</b> ${data.militaryService.from}</p>
                <p><b>To:</b> ${data.militaryService.to}</p>
                <p><b>Rank at Discharge:</b> ${data.militaryService.rankAtDischarge}</p>
                <p><b>Type of Discharge:</b> ${data.militaryService.typeOfDischarge}</p>
                <p><b>If other than honorable, explain:</b> ${data.militaryService.ifAnyOtherThanHonourableExplain}</p>
               

                <br/>
                <h2> Next of Kin </h2>
                <p><b>Last Name:</b> ${data.militaryService.nextOfKin.lastName}</p>
                <p><b>First Name:</b> ${data.militaryService.nextOfKin.firstName}</p>
                <p><b>M.I:</b> ${data.militaryService.nextOfKin.MI}</p>
                <p><b>Street Address:</b> ${data.militaryService.nextOfKin.streetAddress}</p>
                <p><b>Apartment/Unit:</b> ${data.militaryService.nextOfKin.apartment}</p>
                <p><b>State:</b> ${data.militaryService.usaState}</p>
                <p><b>City:</b> ${data.militaryService.nextOfKin.city}</p>
                <p><b>Zip:</b> ${data.militaryService.nextOfKin.zipCode}</p>

                <br/>
                <p><b>Hours Desired:</b> ${data.applicantDeclaration.hoursDesired}</p>
                <p><b>Shifts Available:</b> ${data.applicantDeclaration.shiftsAvailable}</p>
                <p><b>Days Available:</b> ${data.applicantDeclaration.daysAvailable}</p>
                <br/>
                <h2> Applicant Declaration </h2>
                <p><b>Are you 16 or older?:</b> ${data.applicantDeclaration.aboveSixteen}</p>
                <p><b>Do you have a valid RN/ LPN/ CAN License?:</b> ${data.applicantDeclaration.validLicense}</p>
                <p><b>Do you have a valid CPR certification?:</b> ${data.applicantDeclaration.cprCertification}</p>
                <p><b>Do you have a current physical/ Mantoux test?:</b> ${data.applicantDeclaration.physicalTest}</p>
                <p><b>Have you ever been excluded from the Medicare or Medicaid program for conduct that would constitute a misdemeanor, gross misdemeanor or a felony under the law?:</b> ${data.applicantDeclaration.excludedFromMedicare}</p>
                <p><b>If yes, explain:</b> ${data.applicantDeclaration.excludedFromMedicareExplain}</p>
                <p><b>Have you ever been disciplined by professional or state ethics or licensing board?:</b> ${data.applicantDeclaration.disciplinedByProfessionalBoard}</p>
                <p><b>If yes, explain:</b> ${data.applicantDeclaration.disciplinedByProfessionalBoardExplain}</p>
                
               
            `

            console.log(data)

            // init mailOptions
            const mailOptions = {
                from: "Greenlight Global Academy <admin@greenlightglobal.org>",
                to: "admin@greenlightglobal.org",
                subject: 'Apply Form Submission',
                html: htmlBody
            }


            // send email
            smtpTransport.sendMail(mailOptions, (error) => {
                // check if error
                if (error) {
                    console.log(error)
                    return res.status(400).json({
                        success: false,
                        data: error
                    })
                }

                return res.status(200).json({
                    success: true,
                    data: "Form submitted successfully"
                })
            })


        } else {
            return res.json({
                success: false,
                data: "Oops! An error has occured, please try again"
            })
        }


    }
}