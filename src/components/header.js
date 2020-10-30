
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import {
  Flex,
  Text,

} from "@chakra-ui/core"
const Header = ({ siteTitle }) => (
  <Flex bg="white" w="100%" px={{ md: 20, sm: 3 }} py={20} flexDir="column" alignItems="center" justifyContent="center" flex mb={4}>
    <Text fontSize="3.5rem" pl={4} color="teal.500" fontWeight="bold" textAlign="center">{siteTitle}</Text>
    <Text fontSize="1.6rem" color="gray.500" ><i>Sebuah tempat untuk menaruh ceritamu.</i></Text>
    <Menu />
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
