import React from "react";
import Hero from "../components/Hero";
import Home from "../pages/Home";
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

function Landing() {
  return (
    <div>
      <Hero />
      <Home />
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
    </div>
    
  );
}

export default Landing;
