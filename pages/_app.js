
// Navbar component
import Navbar from '../components/navbar'


// init App parent component
function MyApp({ Component, pageProps }) {

    return (
    <>
    <Navbar/>
    <Component {...pageProps }/>

      </>
    )

    
}

export default MyApp