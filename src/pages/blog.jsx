import React from 'react'
import Layout from "../components/layout";
import { Link, graphql } from "gatsby"
import {
    Text,
    Box,
    Button,
    Flex,
    Stack,
    Badge,
} from "@chakra-ui/core"
import SEO from "../components/seo"
export default function BlogPage({ data }) {
    return (
        <Layout>
            <SEO title="Cerita" />
            <Text color="teal.400" fontSize="2.5rem" fontWeight="bold">Cerita</Text>
            <Box mt={8} >
                <Flex flexWrap="wrap" justifyContent="start" alignItems="center">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Box w={{ md: "49%", sm: "100%", xs: "100%" }} mr={{ md: 2, sm: 0 }} key={node.id} borderWidth="1px" mt={5} py={5} shadow="lg" rounded="lg" px={10}>
                            <Text color="teal.500" fontSize="1.7rem" fontWeight="bold" textAlign="left">
                                {node.frontmatter.title}
                            </Text>
                            <Text color="gray.500" fontSize="1.3rem" textAlign="left">
                                Ditulis oleh <Text d="inline" color="teal.500">{node.frontmatter.author}</Text>
                            </Text>
                            <Stack isInline spacing={8} mt={2}>
                                {node.frontmatter.tags.split(',').map((tag) => (
                                    <Badge variantColor="teal" py={1} px={3}>{tag}</Badge>
                                ))}
                            </Stack>
                            <Flex justifyContent="flex-end">
                                <Button variantColor="teal" mt={4} w={{ sm: "100%", md: "auto" }}>
                                    <Link to={node.frontmatter.path}>Mulai Membaca</Link>
                                </Button>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                        tags
                    }
                }
            }
        }
    }
`
