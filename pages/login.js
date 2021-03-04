import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { useLazyQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
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
import { IS_USER } from 'gql/queries/user.query';


export default function Login() {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm();
  const [checkIsUser] = useLazyQuery(IS_USER,{
    onCompleted: async ({isUser}) => {
      if(!isUser){
        // set global error state to signup required
        router.push('/signup');
      }else{
        const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY).auth.loginWithMagicLink({ email: data.email })
    // Once we have the token from magic,
    /**
     * save user in context
     * 
     * 
     */
        const authRequest = await fetch('/api/login', {
          method: 'POST',
          headers: { Authorization: `Bearer ${did}` }
        })
        if (authRequest.ok) {
          router.push('/dashboard');
        }
      }
    }
  });
  
  
  const onSubmit = async (data) => {
   checkIsUser({
      variables: {
        email: data?.email
      }
    });
  }
    

  return (
    <Layout>
    <Flex h="100%" align="center" justify="center" direction="column" >
      <Heading as="span" size="2xl">🎓</Heading>
      <Heading as="h2" color="gray.900">Login </Heading>
    <Flex as="form" my={6} p={4} direction="column" onSubmit={handleSubmit(onSubmit)} w="sm">
      <FormControl>
        <Input 
          name="email" 
          type="email" 
          variant="filled" 
          bg="gray.100" 
          placeholder="hello@example.com" 
          size="lg"
          borderRadius="lg"
          ref={register({required: true, pattern: /^\S+@\S+$/i, })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <Button size="md" colorScheme="blue" borderRadius="lg" my={6}  disabled={disabled} type="submit">Log in</Button>
      <Text fontWeight="semibold"  textAlign="center" color="gray.500">No account? <Link color="blue">Sign up</Link></Text>
    </Flex>
    </Flex>
    </Layout>
  )
}