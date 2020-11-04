
import PropTypes from "prop-types"
import React from "react"
import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Box,
} from "@chakra-ui/core"
import { Link } from "gatsby";
function Header({ siteTitle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex bg="white" w="100%" px={{ md: 20, sm: 3 }} py={20} flexDir="column" alignItems="center" justifyContent="center" flex mb={4}>
      <Text onClick={onOpen} fontSize="3.5rem" color="teal.500" id="header-title" fontWeight="bold" textAlign="center">{siteTitle}</Text>
      <Text fontSize={{ md: "1.6rem", base: "1.3rem", lg: "1.6rem" }} color="gray.500" textAlign="center" ><i>Sebuah tempat untuk menaruh ceritamu. <br />Klik di atas untuk lihat menu!</i></Text>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize="2.5rem" pl={4} color="teal.500" fontWeight="bold" textAlign="center">{siteTitle}</Text>
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="1.4rem" color="teal.500" fontWeight="bold" textAlign="left">Daftar Halaman</Text>
            <Link to="/">
              <Box borderWidth="1px" mt={3} className="drawer-menu" h="90px" rounded="lg" px={10} d="flex" justifyContent="space-between"
                alignItems="center">
                <Box h="100%" w="100%" pl={5} d="flex" flexDirection="column" justifyContent="center">
                  <Text color="teal.500" fontSize="1.5rem">
                    Home
                  </Text>
                  <Text color="gray.500" fontSize="1rem" d={{ base: "none", md: "block" }}>
                    Kembali ke halaman utama
                  </Text>
                </Box>
              </Box>
            </Link>
            <Link to="/about">
              <Box borderWidth="1px" mt={3} className="drawer-menu" h="90px" rounded="lg" px={10} d="flex" justifyContent="space-between"
                alignItems="center">
                <Box h="100%" w="100%" pl={5} d="flex" flexDirection="column" justifyContent="center">
                  <Text color="teal.500" fontSize="1.5rem">
                    Tentang
                </Text>
                  <Text color="gray.500" fontSize="1rem" d={{ base: "none", md: "block" }}>
                    Apa itu ImaginSketch
                </Text>
                </Box>
              </Box>
            </Link>
            <Link to="/stories">
              <Box borderWidth="1px" mt={3} className="drawer-menu" h="90px" rounded="lg" px={10} d="flex" justifyContent="space-between"
                alignItems="center">
                <Box h="100%" w="100%" pl={5} d="flex" flexDirection="column" justifyContent="center">
                  <Text color="teal.500" fontSize="1.5rem">
                    Cerita
                  </Text>
                  <Text color="gray.500" fontSize="1rem" d={{ base: "none", md: "block" }}>
                    Baca cerita yang ada di ImaginSketch
                  </Text>
                </Box>
              </Box>
            </Link>
            <Link to="/form">
              <Box borderWidth="1px" mt={3} className="drawer-menu" h="90px" rounded="lg" px={10} d="flex" justifyContent="space-between"
                alignItems="center">
                <Box h="100%" w="100%" pl={5} d="flex" flexDirection="column" justifyContent="center">
                  <Text color="teal.500" fontSize="1.5rem">
                    Pengajuan
                  </Text>
                  <Text color="gray.500" fontSize="1rem" d={{ base: "none", md: "block" }}>
                    Ajukan ceritamu ke ImaginSketch!
                  </Text>
                </Box>
              </Box>
            </Link>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="solid" variantColor="teal" mr={3} onClick={onClose}>
              Tutup
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
