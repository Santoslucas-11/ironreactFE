import React from "react";
import "../App.css";

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

const ListSubjects = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Components and Props</Heading>
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
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677181225/IronReact/5_rmsrpb.png"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
                <br></br>
                <Image
                  borderRadius="lg"
                  src={
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677182864/IronReact/6_sdvp3b.png"
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
                Components and Props explanation
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Functional Components: Functional components are basically
              functions that return JSX (JavaScript XML) elements. They are
              simple and straightforward, and can take in props (short for
              "properties") as input and return a JSX element. Here is an
              example of a functional component that renders a greeting message:
              In this example, the Greeting component takes in a name prop and
              returns a h1 element with the greeting message.
              <p></p>
              Class Components: Class components are a bit more complex than
              functional components, but they offer more advanced features like
              state management and lifecycle methods. They are created using ES6
              classes and extend the React.Component class. Here is an example
              of a class component that renders a counter:
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
        <div className="bruno1">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Text className="bruno2" as="p" fontSize="lg">
            In this example, we're passing a prop called "text" to the "Button"
            component with the value "Click me!". In the "Button" component's
            function, we access this prop by using the "props" argument and then
            referencing the prop by name: props.text. Props are read-only, which
            means that a component can't modify its own props. Instead, if a
            component needs to change its behavior based on its props, it can
            use conditional logic or pass the props down to child components
            that can modify their own behavior. Overall, props are a powerful
            tool in React that allow us to create modular, reusable components
            that can be customized and combined in many different ways.
          </Text>
        </VStack>
        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image className="bruno3"
                  borderRadius="lg"
                  src={
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677183436/IronReact/7_qhfvph.png"
                  }
                  alt="some good alt text"
                  objectPosition="contain"
                />
                </Link>
                </div>
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

            <Stack direction={"row"} spacing={6}></Stack>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default ListSubjects;
