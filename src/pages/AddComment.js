import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addComment,} from '../api';
import { Button,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Heading,
    Text,
    useColorModeValue,
     ButtonGroup,
     } from '@chakra-ui/react'
function AddComment() {
    const [ title, setTitle] = useState("");
    const [ description, setDescription ] = useState("");
    const navigate = useNavigate();
    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleDescritpionChange(event) {
        setDescription(event.target.value);
    }
    async function handleSubmitForm(event) {
        event.preventDefault();
        console.log({ title, description });
        await addComment({title, description});
        navigate("/subjects");
    }
  return (
    <FormControl>
    <form onSubmit={handleSubmitForm}>
        <>
        <Heading 
          padding={"30"}
          margin-bottom={"-35"}
          margin-top={"-40"}
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          mb={0}>
          Comments
        </Heading>
        <Box borderRadius='md'
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            <FormLabel htmlFor='title'>Title:</FormLabel>
        <Input borderRadius='md' type={'text'}
            placeholder={'Title goes here'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={5}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }} id='title' value={title} onChange={handleTitleChange}/>
        <FormLabel htmlFor='description'>Description:</FormLabel>
        <Input type={'text'}
        margin-bottom={"15"}
            placeholder={'Description goes here'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }} id='title' value={description} onChange={handleDescritpionChange}/>
        <Button className='button' type='submit' colorScheme='teal' size='sm'> Add Comment </Button>
          </Box>
        </>
    </form>
    </FormControl>
  );
}
export default AddComment;