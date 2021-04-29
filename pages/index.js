
// footer component
import Footer from '../components/footer'


// export default Home component
export default function Home() {
  return (
    <div>
    <section className="banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-0">
                    <div className="content-box">
                        <h2>Greenlight Global Agency</h2>
                        <p>Greenlight Global Agency bridges the gap between critical staffing needs and healthcare facilities in the U.S by making long-term matches of qualified internationally educated nurses.</p>
                        <a href="#" className="btn btn-success ">Apply Now</a>
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
                        <a href="#" className="btn btn-success">Read More</a>
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
                        <span className="tagline text-success">contact us</span>
                        <h3 className="sec-title">Don’t Hesitate, Ask Any Query</h3>
                    </div>
                    <address className="contact-info">
              <span><img src="images/icons/map-marker.png" alt="" />1313 E. Sibley Blvd Dolton. IL. 60419. USA</span>
             
              <a href="mailto:"><img src="images/icons/email.png" alt=""/>admin@greenlightglobal.org</a>
                </address>
                </div>
                <div className="col-md-8">
                    <form action="home-01.html">
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="" placeholder="Full Name" required />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="" placeholder="Phone" />
                            </div>
                        </div>
                        <input type="email" className="form-control" id="" placeholder="Email" required />
                        <textarea name="" className="form-control" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn btn-success">send message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </div>
  )
}
