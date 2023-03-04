import React from "react";
import "../App.css";
import { BsLinkedin } from "react-icons/bs";

import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  chakra,
  Stack,
  VisuallyHidden,
  Button,
  ButtonProps,
  Flex,
  ButtonGroup,
} from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677341226/IronReact/brunohihi_qjtpml.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>28/02/2023</Text>
    </HStack>
  );
};

const Forms = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Forms</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677321141/IronReact/17_uhz3ch.png"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <BlogTags tags={["Full-Stack-developer", "Junior"]} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Forms explanation
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Forms in React are a way to collect user input and manage it as
              state in a component. React provides a way to create forms that
              are dynamic and responsive to user input. The basic structure of a
              form in React is similar to HTML forms. A form typically consists
              of one or more form elements, such as input fields, checkboxes,
              radio buttons, select boxes, and buttons. To create a form in
              React, you first need to define the state that will hold the
              values of the form elements. You can use the useState hook to
              define the initial state of the form. Next, you need to add event
              handlers to the form elements to capture user input and update the
              state. React provides several event handlers for form elements,
              such as onChange for input fields and onClick for buttons. Here's
              an example of a simple form component in React:
            </Text>
            <BlogAuthor
              name="Bruno Ferreira"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </Box>

        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%"></Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Text as="p" fontSize="lg">
            In this example, we define two state variables using the useState
            hook: name and email. We also define two event handlers,
            handleNameChange and handleEmailChange, which update the state
            variables when the corresponding input fields are changed. The
            handleSubmit function is called when the form is submitted. It
            prevents the default form submission behavior, which would reload
            the page, and instead logs the form data to the console. Finally, we
            render the form element with its input fields and submit button. We
            also add the onSubmit event handler to the form element, which is
            called when the form is submitted. When the user enters data in the
            input fields and clicks the submit button, the form data is captured
            and the handleSubmit function is called, which logs the data to the
            console. This is just a simple example, but you can create more
            complex forms in React by adding validation, conditional rendering,
            and other features. With React's state management and event handling
            capabilities, you can create dynamic and responsive forms that
            provide a seamless user experience.
          </Text>
        </VStack>
      </Container>
      <footer>
        <Box
          bg={useColorModeValue("gray.50", "gray.900")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>Created and developed By: Bruno & Lucas </Text>
            
            <HStack>
              <ButtonGroup>
                <Button colorScheme="facebook" leftIcon={<BsLinkedin />}>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/bruno-ferreira-a68b93265/"
                    rel="noreferrer"
                  >
                    Linkedin Bruno
                  </a>
                </Button>

                <Button colorScheme="facebook" leftIcon={<BsLinkedin />}>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/lucas-santos-295588247/"
                    rel="noreferrer"
                  >
                    Linkedin Lucas
                  </a>
                </Button>
              </ButtonGroup>
            </HStack>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Forms;
