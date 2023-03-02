import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signup } from '../api';
import { toast, Toast } from 'react-toastify';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';



function Signup() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
    const response = await signup({ email, password });
    if (response.data.message) {
      toast.error(response.data.message)
      setPassword("");
      setEmail("");
    } else {
      toast.success("User Created");
      navigate("/");
    }
  } catch (e) {
    toast.error(`error ${e}`);
  }
  }
  return (
    <>
   <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Create an account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input id="email"
          type="text"
          value={email}
          onChange={handleEmailChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input id="password"
          value={password}
          type="password"
          onChange={handlePasswordChange} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Link color={'blue.500'}>Already have an account?</Link>
            </Stack>
            <Button type="submit" onClick={handleSubmitForm} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
    </>
  );
}
export default Signup;


