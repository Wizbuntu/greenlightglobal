// import smtpTransport 
import smtpTransport from '../../util/smtpTransport'

export default (req, res) => {
    // check request method
    if (req.method === 'POST') {
        // get healthcareRequest
        const healthcareRequestData = req.body

        if (healthcareRequestData) {

            // init htmlBody
            const htmlBody = `
                <h1>Staffing Request</h1>
                <br/>
                <p><b>Facility Name:</b> ${healthcareRequestData.facilityName} </p>
                <p><b>Facility Address:</b> ${healthcareRequestData.facilityAddress} </p>
                <p><b>Name of Contact Person:</b> ${healthcareRequestData.nameOfContactPerson} </p>
                <p><b>Email:</b> ${healthcareRequestData.email} </p>
                <p><b>Phone:</b> ${healthcareRequestData.phone} </p>
                <p><b>Position Needed:</b> ${healthcareRequestData.positionNeeded} </p>
                <p><b>Date From:</b> ${new Date(healthcareRequestData.DateFrom)} </p>
                <p><b>Date To:</b> ${new Date(healthcareRequestData.DateTo)} </p>
                <p><b>Comments:</b> ${healthcareRequestData.comments} </p>
            `

            // init mailOptions 
            const mailOptions = {
                from: "Greenlight Global Academy <admin@greenlightglobal.org>",
                to: "admin@greenlightglobal.org",
                subject: 'Healthcare facility Nurse Staffing Request',
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
                    data: "Request submitted successfully, we will get in touch soon."
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