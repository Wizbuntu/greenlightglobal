
// footer component
import Footer from '../components/footer'

// import Link
import Link from 'next/link'


// import useState 
import {useState} from 'react'

// import axios 
import axios from 'axios'

// toaster
import toast, { Toaster } from 'react-hot-toast';



// export default Home component
export default function Home() {

   

    // init Loading state
    const [Loading, setLoading] = useState(false)

    // init contact state
    const [contact, setContact] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: ""
    })

    // destructure contact 
    const {fullName, phone, email, message} = contact


    // init handleChange 
    const handleChange = (data) => (event) => {
        // update contact state 
        setContact({...contact, [data]: event.target.value})
    }


    // init handleSubmit 
    const handleSubmit = (event) => {
        // update Loading state 
        setLoading(true)

        // preventDefault 
        event.preventDefault()

        // init contactData 
        const contactData = contact

        // send data to contact endpoint
        axios.post('/api/contact', contactData)
        .then(({data}) => {
            // update Loading state 
            setLoading(false)

            // if not success
            if(!data.success) {
                return toast.error(data.data)
            }

            // clear state 
            setContact({...contact, 
                fullName: '',
                phone: '',
                email: '',
                message: ''
            })

            // return success 
            return toast.success(data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
    <section className="banner">
        <div className="container">
            <Toaster/>
            <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-0">
                    <div className="content-box">
                        <h2>Greenlight Global Agency</h2>
                        <p className="mb-0">Greenlight Global Agency bridges the gap between critical staffing needs and healthcare facilities in the U.S by making long-term matches of qualified internationally educated nurses.</p>
                        <Link href="/apply"><a className="btn btn-success">Apply Now</a></Link>
                    </div>
                </div>
                <div className="col-md-6 order-0 order-md-1">
                    <figure className="ban-img">
                        <img src="/images/header-img.jpg" className="img-fluid " alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  

    {/* About Section */}
    <section className="about">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-img-group">
                        <img src="/images/liquid-img/bg.png" alt="" className="about-img-bg" />
                        <div className="row">
                            <div className="col-md-7">
                                <img src="/images/body-img.jpg" alt="" className="about-img-1" />

                            </div>
                            <div className="col-md-5">
                                <img src="/images/body-img-2.jpg" alt="" className="about-img-1" />

                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="content-box-fluid">
                        <h2>About Us</h2>
                        <h5><b>GREENLIGHT GLOBAL AGENCY LLC</b> works to bridge critical staffing needs by making long-term matches between qualified internationally educated nurses and healthcare facilities in the U.S.</h5>
                        <p>Qualified internationally educated nurses receive all credentialing, immigration, and legal fees free of charge. In addition, they are provided with American cultural and clinical skills training in preparation for success at advanced
                            U.S.
                        </p>
                        <Link href="/about"><a className="btn btn-success">Read More</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* Contact us Section */}
    <section className="contact mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="sec-heading">
                        <span className="tagline text-success">Request Information</span>
                        <p>If you have questions regarding our programs, class schedules, fees, and other general
                        inquiries, please use the form to request for more information. We will answer your
                        inquiries as soon as possible.</p>
                        <h3 >Don’t Hesitate To Request Any Information</h3>
                    </div>
                    <address className="contact-info">
              <span><img src="images/icons/map-marker.png" alt="" />1313 E. Sibley Blvd Dolton. IL. 60419. USA</span>
             
              <a href="mailto:"><img src="images/icons/email.png" alt=""/>admin@greenlightglobal.org</a>
                </address>
                </div>
                <div className="col-md-8">
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="row">
                            <div className="col-sm-6">
                                <input value={fullName} onChange={handleChange('fullName')} type="text" className="form-control"  placeholder="Full Name" required />
                            </div>
                            <div className="col-sm-6">
                                <input value={phone} onChange={handleChange('phone')} type="text" className="form-control"  placeholder="Phone" required/>
                            </div>
                        </div>
                        <input value={email} onChange={handleChange('email')} type="email" className="form-control" id="" placeholder="Email" required />
                        <textarea value={message} onChange={handleChange('message')} className="form-control" placeholder="Your Message" required></textarea>
                        {Loading ? <button type="button" className="btn btn-success" disabled>Loading...</button> : 
                        <button type="submit" className="btn btn-success">Send Message</button>
                        }
                        
                    </form>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </div>
  )
}
