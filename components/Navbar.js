import { 
  Flex,
  Link,
  HStack,
  Box,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'




export default function Navbar() {
  return(
  <Flex w="full" justify="space-between" align="center" py={2} px={8} bg="white" >
    <Box>
      <Text as="span" fontSize="xl" fontWeight="semibold">🎓 milo</Text>
    </Box>
    <HStack spacing={2}>
    <NextLink href="/login"><Link>Login</Link></NextLink>
    <NextLink href="/signup"><Link>Signup</Link></NextLink>
    </HStack>
  </Flex>
  )
}