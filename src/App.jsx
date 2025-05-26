import { ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar'
import './App.css'

function App() {
  return (
    <>
     <ChakraProvider>
      <Navbar />
      <Outlet />
    </ChakraProvider>
    </>
  );
}

export default App;
