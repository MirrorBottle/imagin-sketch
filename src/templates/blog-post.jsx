import React from 'react'
import Layout from "../components/layout";
import { graphql, Link } from "gatsby"
import {
    Text,
    Box,
    Stack,
    Badge,
    Button,
} from "@chakra-ui/core"
import SEO from "../components/seo"

export default function Template({ data }) {
    const post = data.markdownRemark
    const stories = data.allMarkdownRemark.edges;
    const currentStoryIndex = data.allMarkdownRemark.edges.findIndex(edge => edge.node.frontmatter.path === post.frontmatter.path);
    const Navs = () => (
        <Stack spacing={4} isInline mb={2}>
            {currentStoryIndex !== 0 && (
                <Box w="100%">
                    <Link to={stories[currentStoryIndex - 1].node.frontmatter.path}>
                        <Button variantColor="teal" variant="solid" leftIcon="chevron-left" w="100%">
                            <Text d={{ base: "none", sm: "none", md: "inline" }}>{stories[currentStoryIndex - 1].node.frontmatter.title}</Text>
                        </Button>
                    </Link>
                </Box>
            )}
            <Box w="100%">
                <Link to="/stories">
                    <Button variantColor="teal" variant="solid" w="100%">
                        Kembali
                    </Button>
                </Link>
            </Box>
            {currentStoryIndex < stories.length - 1 && (
                <Box w="100%">
                    <Link to={stories[currentStoryIndex + 1].node.frontmatter.path}>
                        <Button variantColor="teal" variant="solid" rightIcon="chevron-right" w="100%">
                            <Text d={{ base: "none", sm: "none", md: "inline" }}>{stories[currentStoryIndex + 1].node.frontmatter.title}</Text>
                        </Button>
                    </Link>
                </Box>
            )}
        </Stack>
    )
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Navs />
            <Text color="teal.400" fontSize="2.5rem" fontWeight="bold">{post.frontmatter.title}</Text>
            <Text color="gray.500" fontSize="1.3rem" textAlign="left">
                Ditulis oleh <Text d="inline" color="teal.500">{post.frontmatter.author}</Text>
            </Text>
            <Stack isInline spacing={1} mt={2} mb={8}>
                {post.frontmatter.tags.split(',').map((tag, index) => (
                    <Badge key={index} variantColor="teal" py={1} px={3}>{tag}</Badge>
                ))}
            </Stack>
            <Box mt={8} >
                <Text id="content" fontSize="1.1rem" color="gray.600" dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>
            <Navs />
        </Layout>

    )
}

export const PostQuery = graphql`
    query BlogPostByPath($path: String!) {
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
        markdownRemark(frontmatter: {path: {eq:$path}}) {
            html
            frontmatter {
                path
                title
                author
                date
                tags
            }
        }
    }

`

