import React, { useEffect, useState } from 'react'
import Layout from "../components/layout";
import { Link, graphql } from "gatsby"
import {
    Text,
    Box,
    Button,
    Flex,
    Stack,
    Badge,
    Input
} from "@chakra-ui/core"
import SEO from "../components/seo"
export default function BlogPage({ data }) {
    const [stories, setStories] = useState(data.allMarkdownRemark.edges.sort((a, b) => {
        return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
    }))
    const [realData, setRealData] = useState(data.allMarkdownRemark.edges.sort((a, b) => {
        return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
    }))
    const onSearchChange = (e) => {
        const stories = e.target.value !== "" ? realData.filter(({ node }) => node.frontmatter.title.toUpperCase().includes(e.target.value.toUpperCase())) : realData;
        setStories(stories)
    }
    return (
        <Layout>
            <SEO title="Cerita" />
            <Text color="teal.400" fontSize="2.5rem" fontWeight="bold">Cerita</Text>
            <Text color="gray.400" fontSize="1.5rem">Total Cerita :  <Text color="teal.400" d="inline" fontSize="1.5rem" fontWeight="bold">{stories.length}</Text></Text>
            <Input placeholder="Cari ceritamu..." mt={2} style={{ border: "2px solid #319795" }} onChange={onSearchChange} />
            <Box mt={8} >
                <Flex flexWrap="wrap" justifyContent="start" alignItems="center">
                    {stories.map(({ node }) => (
                        <Box w={{ md: "49%", sm: "100%", xs: "100%" }} mr={{ md: 2, sm: 0 }} key={node.id} borderWidth="1px" mt={8} py={5} shadow="lg" className="stories-card" rounded="lg" px={10}>
                            <Link to={node.frontmatter.path}>
                                <Text color="teal.500" fontSize="1.7rem" fontWeight="bold" textAlign="left">
                                    {node.frontmatter.title}
                                </Text>
                                <Text color="gray.500" fontSize="1.3rem" textAlign="left">
                                    Ditulis oleh <Text d="inline" color="teal.500">{node.frontmatter.author}</Text>
                                </Text>
                                <Stack isInline spacing={1} mt={2}>
                                    {node.frontmatter.tags.split(',').map((tag) => (
                                        <Badge variantColor="teal" py={1} px={3}>{tag}</Badge>
                                    ))}
                                </Stack>
                                <Text color="gray.500" fontSize="1rem" textAlign="left" mt={3}>{node.excerpt}</Text>
                            </Link>
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
                    excerpt
                }
            }
        }
    }
`
