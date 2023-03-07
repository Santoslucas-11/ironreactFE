import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { useContext } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

function Navbar() {
  const { loggedUser, logout } = useContext(UserContext);

  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <div>
      <Stack
        backgroundColor={"#a0ddff"}
        direction={"row"}
        spacing={4}
        display="flex"
        alignItems="center"
      >
        <Box key={"Home"}>
          <Popover trigger={"hover"} placement={"bottom-starfe"}>
            <PopoverTrigger>
              <NavLink to="/">
                <Link
                  p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  {"Home"}
                </Link>
              </NavLink>
            </PopoverTrigger>
          </Popover>
        </Box>
        {loggedUser && (
          <>
            <Box key={"Components and Props"}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/subjects">
                    <Link
                      p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"Components and Props"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box key={"State Hook And Events"}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/StateshookAndEvents">
                    <Link
                     p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"State Hook And Events"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box key={"List and Keys"}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/ListKey">
                    <Link
                      p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"List and Keys"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box key={"Condicional Rendering"}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/CondicionalRendering">
                    <Link
                      p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"Condicional Rendering"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box key={"LiftState"}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/LiftState">
                    <Link
                      p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"LiftState"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box key={"Forms"}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/Forms">
                    <Link
                      p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"Forms"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box key={"Routing"}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/Routing">
                    <Link
                      p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"Routing"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
            <Box key={"Routing"}>
              <Popover trigger={"comments"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <NavLink to="/comments">
                    <Link
                      p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={1000}
                  color={linkColor}
                  px={4}
                  py={2.5}
                  transition="all 0.2s"
                  borderRadius="md"
                  borderWidth="3px"
                  _hover={{ bg: "#00d7fe" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                    >
                      {"Comments"}
                    </Link>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            </Box>
          </>
        )}

        <div>
          {loggedUser ? (
            <div>
              <p>Welcome {loggedUser.email}</p>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"red.400"}
                href={"#"}
                _hover={{
                  bg: "red.700",
                }}
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <div>
                <NavLink to="/login">
                  <Button
                    as={"a"}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"green.400"}
                    href={"#"}
                    _hover={{
                      bg: "green.900",
                    }}
                  >
                    Login
                  </Button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/signup">
                  <Button
                    as={"a"}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    href={"#"}
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Sign Up
                  </Button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </Stack>
    </div>
  );
}
export default Navbar;
