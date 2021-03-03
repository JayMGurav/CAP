import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.50",
        bg:"gray.800"
      },
      "h1, h2, h3, h4, h5, h6":{
        color:"#f7fafc"
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