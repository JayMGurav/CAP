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
  <Flex w="full" justify="space-between" align="center" py={2} px={8} bg="white" gap>
    <Box>
      <Text as="span" fontSize="xl" fontWeight="semibold">🎓 xyz</Text>
    </Box>
    <HStack spacing={2}>
    <NextLink href="/"><Link>Home</Link></NextLink>
    <NextLink href="/legal"><Link>Legal</Link></NextLink>
    <NextLink href="/terms"><Link>Terms and Conditions</Link></NextLink>
    <NextLink href="/privacy"><Link>Privacy</Link></NextLink>
    </HStack>
  </Flex>
  )
}
