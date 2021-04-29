import { useState, useContext } from 'react';
import '../../styles/globals.scss'
import { ctxt } from '../components/Context/index';

function MyApp({ Component, pageProps }) {

  const [profileID, setProfileID] = useState(1);

  return (
    <ctxt.Provider value={{ profileID, setProfileID }}>
      <Component {...pageProps} />
    </ctxt.Provider>
  )
}

export default MyApp
