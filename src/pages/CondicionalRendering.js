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
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  chakra,
  Stack,
  VisuallyHidden,
  Button,
  ButtonGroup,
  HStack,
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

const CondicionalRendering = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Condicional Rendering</Heading>
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
                <p></p>
                <Text fontWeight={"bold"}>Using if statements:</Text>
                <Image
                  borderRadius="lg"
                  src={
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677185406/IronReact/10_ucoil1.png"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
                <br></br>
                <Text fontWeight={"bold"}>Using ternary operators:</Text>

                <p></p>
                <Image
                  borderRadius="lg"
                  src={
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677186161/IronReact/11_nxljbp.png"
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
                CondicionalRendering explanation
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              In React, conditional rendering is a technique used to
              conditionally render components or content based on a certain
              condition. This can be useful for showing or hiding certain parts
              of a UI based on user interactions or other events. There are a
              few ways to implement conditional rendering in React, including
              using if statements, ternary operators, and logical && operator.
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
              In these examples, the isLoggedIn prop is used to conditionally
              render different components or content based on whether the user
              is logged in or not. When isLoggedIn is true, the component will
              render a welcome message, and when it's false, it will render a
              login prompt. Overall, conditional rendering is a powerful tool in
              React that allows us to create dynamic and interactive UIs that
              respond to user actions and other events. By using conditional
              rendering, we can create more flexible and customizable components
              that can adapt to different scenarios and use cases.
            </Text>
          </VStack>
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Text fontWeight={"bold"}>Using logical && operator:</Text>

            <Image
              className="bruno4"
              borderRadius="lg"
              src={
                "https://res.cloudinary.com/dphx1elfv/image/upload/v1677186267/IronReact/12_meaquw.png"
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

export default CondicionalRendering;
