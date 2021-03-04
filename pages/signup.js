import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { 
  Flex,
  Box,
  Heading,  
  Input, 
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea, 
  Text,
  Link,
} from '@chakra-ui/react'
import Layout from '@/components/Layout'


export default function Login() {
  const router = useRouter()

  
  const handleSubmit = async (event) => {
    event.preventDefault()

  }

  return (
    <Layout>
    <Flex h="100%" align="center" justify="center" direction="column" >
      <Heading as="span" size="xl">🎓</Heading>
      <Heading as="h2" color="gray.900">Sign up</Heading>
    <Flex as="form" direction="column" onSubmit={handleSubmit} maxW="sm">
      <Box my={6} >
      <FormControl>
        <FormLabel mb={0} mt={2}>Email</FormLabel>
        <Input 
          name="email" 
          type="email" 
          variant="filled" 
          bg="gray.100" 
          placeholder="hello@example.com" 
          size="md"
          borderRadius="lg"
        />
      </FormControl>
      <FormControl>
      <FormLabel mb={0} mt={2}>Full name</FormLabel>
        <Input 
          name="fullname" 
          type="text" 
          variant="filled" 
          bg="gray.100" 
          placeholder="John Doe" 
          size="md"
          borderRadius="lg"
        />
      </FormControl>
      <FormControl>
      <FormLabel mb={0} mt={2}>Bio</FormLabel>
        <Textarea 
          name="Bio" 
          variant="filled" 
          bg="gray.100" 
          placeholder="Infamous Shenanigan" 
          size="md"
          borderRadius="lg"
        />
      </FormControl>
      </Box>
      <Text fontWeight="semibold"  textAlign="center" color="gray.500">By proceeding, you are agreeing to XYZ's <Link color="blue">Terms and Conditions</Link> and <Link color="blue">Privacy Policy</Link></Text>
      <Button size="md" colorScheme="blue" borderRadius="lg" my={6}>Create account</Button>
    </Flex>
    </Flex>
    </Layout>
  )
}