import { useState } from 'react'
import Context from '../Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [appIsActive, setAppIsActive] = useState(false); 

  return (
    <Context.Provider value={{appIsActive, setAppIsActive}}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
