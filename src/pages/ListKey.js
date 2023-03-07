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
  Center,
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
const ListKey = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">List and Keys</Heading>
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
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677186685/IronReact/13_kazhwy.png"
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
                Lists
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              style={{textAlign: "justified"}}
            >
             Lists are one of the most common parts of the UI in web applications, you can render a list of elements using the map method to iterate over an array of data and create a new array of React elements.
             Here's an example of how to render a list of items in React:
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
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Text as="p" fontSize="lg" style={{textAlign: "justified"}}>
          In this example, the List component receives an array of items as a prop, and it uses the map method to create a new array of 'li' elements for each item. The resulting array of elements is returned as the content of a 'ul' element.
          Note that you can include any valid JSX within the map function to customize the rendering of each item in the list.
          </Text>
        </VStack>
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
                    "https://res.cloudinary.com/dphx1elfv/image/upload/v1677186685/IronReact/15_boy0ms.png"
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
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Keys
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              style={{textAlign: "justified"}}
            >
             Keys are special props that provide a unique identifier to each element in a list or an array of elements. Keys help React identify which items have changed, been added, or been removed from the list, and they help optimize the rendering process.
             Here's an example of how to use keys in a list of elements:
            </Text>
          </Box>
        </Box>
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%"></Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Text as="p" fontSize="lg" style={{textAlign: "justified"}}>
          In this example, each item in the items array has an id property, which is used as the key prop for each 'li' element. This provides a unique identifier for each element in the list.
          Note that it's generally not recommended to use the index of an item in the array as the key prop if the order of items may change, as this can cause unexpected behavior. Instead, it's best to use a unique identifier from the data itself, such as an ID field.
          If you don't provide a key prop for each element in a list, React will generate a warning in the console. Additionally, if the key values are not unique, React will also generate a warning in the console.
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
export default ListKey;