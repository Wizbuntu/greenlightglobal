// import nodemailer
import nodemailer from 'nodemailer'

// init smtpTransport
const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD
    }
})

console.log(process.env.EMAIL)


export default smtpTransport