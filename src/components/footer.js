import React from 'react'
import PropTypes from "prop-types"
import {
    Flex,
    Text,
    Box,
} from "@chakra-ui/core"
function Footer({ siteTitle }) {
    return (
        <Flex bg="teal.700" w="100%" height="5rem" px={{ md: 20, sm: 3 }} py={20} flexDir="column" alignItems="center" justifyContent="center">
            <Text fontSize="2.5rem" pl={4} color="white" fontWeight="bold" textAlign="center">{siteTitle}</Text>
            <Text fontSize="1.5rem" pl={4} color="white" textAlign="center">Made by <Text fontWeight="bold" color="teal.100" d="inline">Bayu Setiawan</Text> with <Text fontWeight="bold" color="teal.100" d="inline">React</Text></Text>
        </Flex>
    )
}
Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer;
