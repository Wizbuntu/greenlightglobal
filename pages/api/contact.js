// import smtpTransport 
import smtpTransport from '../../util/smtpTransport'

export default (req, res) => {
    // check request method
    if (req.method === 'POST') {
        // get healthcareRequest
        const contactData = req.body

        if (contactData) {

            // init htmlBody
            const htmlBody = `
                <h1>Request Information</h1>
                <br/>
                <p><b>Full Name:</b> ${contactData.fullName} </p>
                <p><b>Phone:</b> ${contactData.phone} </p>
                <p><b>Email:</b> ${contactData.email} </p>
                <p><b>Message:</b> ${contactData.message} </p>
            `

            // init mailOptions 
            const mailOptions = {
                from: "Greenlight Global Academy <admin@greenlightglobal.org>",
                to: "admin@greenlightglobal.org",
                subject: 'Request Information',
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
                    data: "Request information submitted successfully, we will get in touch soon."
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