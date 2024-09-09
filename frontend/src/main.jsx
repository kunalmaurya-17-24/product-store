import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(


    <ChakraProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>


)
