// Head
import Head from 'next/head'

// import Link
import Link from 'next/link'

// useEffect
import {useEffect} from 'react'

// loadjs
import loadjs from 'loadjs'



// export Navbar Component
export default function Navbar() {
    useEffect(() => {
       
        //init Load js
        loadjs('/js/jquery-3.3.1.min.js', function() {
            loadjs('/js/jquery-ui.min.js', function() {
                loadjs('/js/bootstrap.min.js', function() {
                    loadjs('/js/owl.carousel.min.js', function() {
                        loadjs('/js/scripts.js')
                    })
                })
            })
        })
    }, [])
    
    return (
        <div>
        <Head>
        <title>Greenlight Global Academy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/images/green_logo.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>


        {/* <!-- Header strat --> */}
        <header className="header abs-header">
            <div className="container">
                <nav className="navbar">
                    {/* <!-- Site logo --> */}
                    <Link href="/">
                    <a className="logo">
                       
                        <img src="/images/green_logo.png" alt="green light" />
                      
                        
                    </a>
                    </Link>

                    <a id="mobile-menu-toggler">
                        <i className="ti-align-justify"></i>
                    </a>
                    <ul className="navbar-nav">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/apply">Apply Now</Link></li>
                        <li><a href="#">FAQs</a></li>
                        <li><Link href="/healthcare/facilities">For Healthcare Facilities</Link></li>
                       

                        <li className="current-menu-item has-menu-child">
                            <a href="#">Events</a>
                            <ul className="sub-menu">
                                <li><Link href="/training">Training</Link></li>
                                <li><a href="#">Conference/Seminar</a></li>
                            
                            </ul>
                        </li>

                       
                     
                    </ul>
                </nav>
            </div>
        </header>
      </div>
    )
}