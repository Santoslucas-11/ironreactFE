import React from "react";
import { Fragment } from "react";
import {
  Container,
  Box,
  chakra,
  Flex,
  Text,
  VStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Bruno Ferreira",
    position: "Junior FullStack Developer",
    company: "Iron-Hack",
    image:
      "https://res.cloudinary.com/dphx1elfv/image/upload/v1678218209/IronReact/brunofotofull_iwt1gs.jpg",
    content: `I am a Full-Stack Web Developer with a background in developing and manufacturing safety devices for cars.

    My first experience with lines of code was during high school when I took a Software Development course and was introduced to the basics of JavaScript.
    
    Since then, programming has always been on my mind, but my goal was to leave my parents' house earlier, so I started working at a young age and left this dream behind.
    
    At the age of 24, I was able to achieve my goal, and now, at the age of 28, I decided it was time to pursue that dream again. I decided to join IronHack Bootcamp where I learned and worked withtechnologies such as JavaScript, CSS, HTML & MERN - MongoDB, Express, React.js, Node.js and other technologies.`,
  },
  {
    name: "Lucas Santos",
    position: "Junior FullStack Developer",
    company: "Iron-Hack",
    image:
      "https://res.cloudinary.com/dphx1elfv/image/upload/v1677792035/IronReact/WhatsApp_Image_2023-03-02_at_20.02.16_qjow1a.jpg",
    content: `A software developer  with a solid understanding of both front-end and back-end development.  Responsible for designing and building software applications, ensuring that they are functional, scalable, and user-friendly. Knowledge with programming languages and  technologies such as HTML, CSS, JavaScript, Node.js, and React.`,
  },
];

const Testimonials = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Flex justify="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3}>
          ABOUT US
        </chakra.h3>
      </Flex>

      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <VStack spacing={3} pt={1} justify="center">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor="green.400"
              name="avatar"
              src={obj.image}
            />
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="lg">
                {obj.name}
              </Text>
              <Text fontWeight="medium" fontSize="sm" color="gray.400">
                {obj.position}, {obj.company}
              </Text>
            </Box>
            <Box textAlign="center" maxW="4xl">
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
            </Box>
          </VStack>
          {testimonials.length - 1 !== index && <Divider my={6} />}
        </Fragment>
      ))}
    </Container>
  );
};

export default Testimonials;
