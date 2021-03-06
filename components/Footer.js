import { 
  Flex,
  Link,
  HStack,
  Box,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'




export default function Footer() {
  return(
  <Flex w="full" justify="center" direction="column" align="center" py={4} px={[2,6]} bg="white" >
    <Box>
      <Text as="span" fontSize="xl" fontWeight="semibold">🎓 milo</Text>
    </Box>
    <Flex direction={["column", "row"]} justify="center" align="center">
      <NextLink href="/"  ><Link m={1}>Home</Link></NextLink>
      <NextLink href="/legal"  ><Link m={1}>Legal</Link></NextLink>
      <NextLink href="/privacy"  ><Link m={1}>Privacy</Link></NextLink>
      <NextLink href="/terms"  ><Link m={1}>Terms and Conditions</Link></NextLink>
    </Flex>
  </Flex>
  )
}
