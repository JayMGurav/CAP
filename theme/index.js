import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg:"gray.50",
        overflow:"hidden"
      },
      "h1, h2, h3, h4, h5, h6":{
        color:"#63b3ed"
      }
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    
  },
})



export default theme;