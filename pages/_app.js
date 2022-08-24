import { Fragment } from 'react';
import { AllContextProvider } from '../a-store/context-store/AllContext';
import Footer from '../components/Footer';
import MegaMenu from '../components/MegaMenu';
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import '../styles/md-styles.css'

function MyApp({ Component, pageProps }) {
  return <Fragment >
    <AllContextProvider>
      <Navbar />
     <Component {...pageProps} />
    </AllContextProvider>
  
     <Footer/>
  </Fragment>
}

export default MyApp
