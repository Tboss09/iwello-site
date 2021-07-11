import React from 'react'
import WithSubnavigation from './components/NavBar'
import { Introduction ,Story,Reason} from './Pages/index'
const App = () => {
 return (
  <>
   <WithSubnavigation />

   <Introduction />
   <Story/>
   <Reason/>x
  </>
 )
}

export default App
