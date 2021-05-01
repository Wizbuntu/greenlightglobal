// import smtpTransport 
import smtpTransport from '../../util/smtpTransport'

export default (req, res) => {
    // check request method
    if (req.method === 'POST') {
        // get trainingData
        const trainingData = req.body

        if (trainingData) {

            // init htmlBody
            const htmlBody = `
                <h1>Training Registration</h1>
                <br/>
                <p><b>Last Name:</b> ${trainingData.lastName} </p>
                <p><b>First Name:</b> ${trainingData.firstName} </p>
                <p><b>MI:</b> ${trainingData.MI} </p>
                <p><b>Which Program are you enrolling in?:</b> ${trainingData.program} </p>
                <p><b>Address:</b> ${trainingData.address} </p>
                <p><b>Phone:</b> ${trainingData.phone} </p>
                <p><b>Email:</b> ${trainingData.email} </p>
                <p><b>Cell Phone:</b> ${trainingData.cellPhone} </p>
                <p><b>Date of Birth:</b> ${new Date(trainingData.dob)} </p>
                <p><b>Gender:</b> ${trainingData.gender} </p>
                <p><b>Do you have Reliable equipment (Laptops) and internet for the e-learning?:</b> ${trainingData.elearningEquipment} </p>
                <p><b>Highest Educational Level Completed:</b> ${trainingData.highestEducation} </p>
                <p><b>Do you have a School of Nursing Degree/Diploma or in Final Year?:</b> ${trainingData.nursingDegree} </p>
            `

            // init mailOptions 
            const mailOptions = {
                from: "Greenlight Global Academy <admin@greenlightglobal.org>",
                to: "admin@greenlightglobal.org",
                subject: 'Training Registration Form Submission',
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
                    data: "Training Request submitted successfully, we will get in touch soon."
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