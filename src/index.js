import React from 'react'
import ReactDOM from 'react-dom'
import '@fontsource/open-sans'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'

const theme = extendTheme({
 colors: {
  brand: {
   100: '#0d0618',
   90: '#1a0c30',
   80: '#411f79',
   70: '#411f79',
   60: '#823df1',
   50: '#b48bf7',
   40: '#cdb1f9',
   30: '#dac5fb',
   20: '#f3ecfe',
   10: '#823df1',
  },
 },
})

ReactDOM.render(
 <React.StrictMode>
  <ChakraProvider theme={theme}>
   <App />
  </ChakraProvider>
 </React.StrictMode>,
 document.getElementById('root')
)
