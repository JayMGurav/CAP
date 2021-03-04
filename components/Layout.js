import { 
  Container ,
  Link,
  Box,
} from '@chakra-ui/react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {
  return(
  <Box  w="full" maxH="100vh">
    <Navbar/>
    <Box  h="calc(100vh - 6rem)" w="full" overflowY="auto">
    {children}
    </Box>
    <Footer/>
  </Box>
  )
}
