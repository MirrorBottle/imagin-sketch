import React from 'react'
import { Link } from "gatsby"
import {
    Stack,
    Button
} from "@chakra-ui/core"
export default function menu() {
    return (
        <Stack isInline spacing={4} mb={8} mt={4}>
            <Button variantColor="teal">
                <Link to="/">Home</Link>
            </Button>
            <Button variantColor="teal">
                <Link to="/about">Tentang</Link>
            </Button>
            <Button variantColor="teal">
                <Link to="/blog">Cerita</Link>
            </Button>
        </Stack>
    )
}
