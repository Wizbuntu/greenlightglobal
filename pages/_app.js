
// Navbar component
import Navbar from '../components/navbar'


// footer component
import Footer from '../components/footer'

// init App parent component
function MyApp({ Component, pageProps }) {

    return (
    <>
    <Navbar/>
    <Component {...pageProps }/>
    <Footer/>


      </>
    )

    
}

export default MyApp