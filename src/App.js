import React, { useRef, useEffect } from 'react'
import {
 Convince,
 Features,
 Footer,
 Home,
 NavBar,
 Testimonial,
 HideBetween,
} from './pages/index'
const App = () => {
 return (
  <>
   <HideBetween siv  startDivID="home"  endDivID="feature">
    <NavBar />
   </HideBetween>

   <Home />
   <Features />
   <Testimonial />
   <Convince />
   <Footer />
  </>
 )
}

export default App
