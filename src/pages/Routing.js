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
        src="https://res.cloudinary.com/dphx1elfv/image/upload/v1677792035/IronReact/WhatsApp_Image_2023-03-02_at_20.02.16_qjow1a.jpg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>28/02/2023</Text>
    </HStack>
  );
};
const Routing = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Routing</Heading>
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
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677321927/IronReact/18_gwfwt1.png"
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
              Routing Explanantion
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              style={{textAlign: "justified"}}
            >
               Routing in React allows you to create multi-page applications with URLs
        that correspond to different views or pages. React provides several
        libraries for routing, such as React Router and Reach Router, which make
        it easy to define and manage routes in your application. The basic idea
        of routing in React is to map URLs to specific components that render
        the content for each page. When a user clicks on a link or types a URL
        in the browser, the router checks the URL and renders the appropriate
        component. Here's a simple example of how to define routes in React
        using the React Router library:
            </Text>
            <BlogAuthor
              name="Lucas Santos"
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
            <Text className="bruno2" as="p" fontSize="lg" style={{textAlign: "justified"}}>
            In this example, we import the BrowserRouter, Route, and Link components
        from the react-router-dom library. We define two components, Home and
        About, which represent the content for the two pages in our application.
        We then define a Router component, which wraps our entire application.
        Inside the Router, we define a navigation menu with two links, one for
        the Home page and one for the About page. We also define two Route
        components, one for each page in our application. The exact keyword in
        the Route for the Home page ensures that it only matches the exact path
        /, while the path keyword in the Route for the About page defines the
        path for that page. When the user clicks on a link or types a URL in the
        browser, the router matches the URL to the appropriate Route component
        and renders the corresponding content. The Link component is used to
        generate the appropriate URLs for each link in the navigation menu. This
        is just a simple example, but you can create more complex routes with
        nested routes, dynamic routes, and more using the React Router library.
        With routing in React, you can create multi-page applications that
        provide a seamless user experience and help organize your code.
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
            <Stack direction={"row"} spacing={6}></Stack>
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
export default Routing;