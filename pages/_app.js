import { Fragment, useEffect } from 'react';
import { AllContextProvider } from '../a-store/context-store/AllContext';
import Footer from '../components/Footer';
import MegaMenu from '../components/MegaMenu';
import Navbar from '../components/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
        };
        use();
      }, []); 


  return <Fragment >
    <AllContextProvider>
      <Navbar />
     <Component {...pageProps} />
    </AllContextProvider>
  
     <Footer/>
  </Fragment>
}

export default MyApp
