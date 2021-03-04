import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { 
  Flex,
  Heading,  
  Input, 
  Button,
  FormControl,
  FormErrorMessage,
  Text,
  Link,
} from '@chakra-ui/react'
import Layout from '@/components/Layout'


export default function Login() {
  const router = useRouter()

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const { elements } = event.target

    // Add the Magic code here
    const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY)
    .auth
    .loginWithMagicLink({ email: elements.email.value })
    // Once we have the token from magic,
    const authRequest = await fetch('/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` }
    })
  

    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      router.push('/dashboard')
    } else { /* handle errors */ }
  }

  return (
    <Layout>
    <Flex h="100%" align="center" justify="center" direction="column" >
      <Heading as="span" size="xl">🎓</Heading>
      <Heading as="h2" color="gray.900">Login </Heading>
    <Flex as="form" my={6} p={4} direction="column" onSubmit={handleSubmit} >
      <FormControl>
        <Input 
          name="email" 
          type="email" 
          variant="filled" 
          bg="gray.100" 
          placeholder="hello@example.com" 
          size="lg"
          borderRadius="lg"
        />
      </FormControl>
      <Button size="md" colorScheme="blue" borderRadius="lg" my={6}>Log in</Button>
      <Text fontWeight="semibold"  textAlign="center" color="gray.500">No account? <Link color="blue">Sign up</Link></Text>
    </Flex>
    </Flex>
    </Layout>
  )
}