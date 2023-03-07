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

const LiftState = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">LiftState</Heading>
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
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677320505/IronReact/16_noeiyp.png"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
                <br></br>
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
              LiftState explanation
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              "Lifting state up" is a technique in React for managing state in a
              parent component and passing that state down to child components
              as props. This allows for greater control and flexibility in
              managing the state of your application. The basic idea is to
              identify a common parent component for a set of related child
              components that share some state. This parent component can manage
              the state and pass it down to the child components as props. When
              the child components need to update the shared state, they can do
              so by calling a callback function passed down from the parent
              component as a prop. Here's an example to illustrate the concept:
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
              In this example, ParentComponent manages the count state using the
              useState hook. It also defines a incrementCount function that can
              be used to update the count state. ParentComponent then renders
              two instances of ChildComponent, passing the count state and the
              incrementCount function as props. ChildComponent simply displays
              the count and provides a button to increment it, calling the
              incrementCount function passed down from the parent component. As
              a result, both instances of ChildComponent share the same count
              state managed by the ParentComponent. When one of them increments
              the count, the other will see the updated count as well. This is
              just a simple example, but the technique can be applied to more
              complex components and state management scenarios as well. By
              lifting state up to a common parent component and passing it down
              as props, you can create a more modular and flexible architecture
              for your React application.
            </Text>
          </VStack>
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
          
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

            <HStack>
              <ButtonGroup>
                <Button colorScheme="linkedin" leftIcon={<BsLinkedin />}>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/bruno-ferreira-a68b93265/"
                    rel="noreferrer"
                  >
                    Linkedin Bruno
                  </a>
                </Button>

                <Button colorScheme="linkedin" leftIcon={<BsLinkedin />}>
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

export default LiftState;
