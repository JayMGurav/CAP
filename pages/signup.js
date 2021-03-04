import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { useForm } from "react-hook-form";
import {  useMutation } from '@apollo/client';

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

import { ADD_USER } from 'gql/mutations/user.mutation';


export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [addUser, { data }] = useMutation(ADD_USER);

  const onSubmit = async ({email, fullname,summary}) => {
    console.log({email, fullname,summary});
    try {
      const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY).auth.loginWithMagicLink({ email: email })

    /**
     * save user in context
     * 
     * 
     */
      addUser({
        variables:{
          email,
          fullname,
          summary
        }
      })
      const authRequest = await fetch('/api/login', {
        method: 'POST',
        headers: { Authorization: `Bearer ${did}` }
      })
      if (authRequest.ok) {
        router.push('/dashboard');
      }
    } catch (error) {
      throw new Error('Error signing up: ', error.message);
    }
  
  }

  return (
    <Layout>
    <Flex h="100%" align="center" justify="center" direction="column" >
      <Heading as="span" size="2xl">🎓</Heading>
      <Heading as="h2" color="gray.900">Sign up</Heading>
    <Flex as="form" direction="column" onSubmit={handleSubmit(onSubmit)} maxW="sm">
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
          ref={register({required:  { value: true, message: "Email is required" }, pattern: /^\S+@\S+$/i, })}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
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
          ref={register({required:  { value: true, message: "Your Fullname is required" } })}
          />
        <FormErrorMessage>{errors?.fullname?.message}</FormErrorMessage>
      </FormControl>
      <FormControl>
      <FormLabel mb={0} mt={2}>Summary</FormLabel>
        <Textarea 
          name="summary" 
          variant="filled" 
          bg="gray.100" 
          placeholder="Infamous Shenanigan" 
          size="md"
          borderRadius="lg"
          ref={register({ maxLength: { value: 140, message: "Your summery should be less than 140" } })}
        />
        <FormErrorMessage>{errors?.summary?.message}</FormErrorMessage>
      </FormControl>
      </Box>
      <Text fontWeight="semibold"  textAlign="center" color="gray.500">By proceeding, you are agreeing to XYZ's <Link color="blue">Terms and Conditions</Link> and <Link color="blue">Privacy Policy</Link></Text>
      <Button type="submit" size="md" colorScheme="blue" borderRadius="lg" my={6}>Create account</Button>
    </Flex>
    </Flex>
    </Layout>
  )
}