import { useState, useContext } from 'react';
import '../../styles/globals.scss'
import { ctxt } from '../components/Context/index';

function MyApp({ Component, pageProps }) {

  const [profileID, setProfileID] = useState(1);
  const [profileName, setProfileName] = useState("Lucas");

  return (
    <ctxt.Provider value={{ profileID, setProfileID, profileName, setProfileName }}>
      <Component {...pageProps} />
    </ctxt.Provider>
  )
}

export default MyApp
