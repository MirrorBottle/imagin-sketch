import React from 'react'
import Layout from "../components/layout";
import { graphql } from "gatsby"
import {
    Text,
    Box,
    Stack,
    Image,
    Badge,
    Button,
} from "@chakra-ui/core"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default function StoryTemplate({ data }) {
    const post = data.markdownRemark
    const stories = data.allMarkdownRemark.edges.sort((a, b) => {
        return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
    });
    const currentStoryIndex = data.allMarkdownRemark.edges.findIndex(edge => edge.node.frontmatter.path === post.frontmatter.path);
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: post.frontmatter.path },
    }
    const Navs = () => (
        <Stack spacing={4} isInline mb={6}>
            {currentStoryIndex !== 0 && (
                <Box w="100%">
                    <AniLink fade to={stories[currentStoryIndex - 1].node.frontmatter.path}>
                        <Button variantColor="teal" variant="solid" leftIcon="chevron-left" w="100%">
                            <Text d={{ base: "none", sm: "none", md: "inline" }}>{stories[currentStoryIndex - 1].node.frontmatter.title}</Text>
                        </Button>
                    </AniLink>
                </Box>
            )}
            <Box w="100%">
                <AniLink fade to="/stories">
                    <Button variantColor="teal" variant="solid" w="100%">
                        Kembali
                    </Button>
                </AniLink>
            </Box>
            {currentStoryIndex < stories.length - 1 && (
                <Box w="100%">
                    <AniLink fade to={stories[currentStoryIndex + 1].node.frontmatter.path}>
                        <Button variantColor="teal" variant="solid" rightIcon="chevron-right" w="100%">
                            <Text d={{ base: "none", sm: "none", md: "inline" }}>{stories[currentStoryIndex + 1].node.frontmatter.title}</Text>
                        </Button>
                    </AniLink>
                </Box>
            )}
        </Stack>
    )
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            {console.log(post.frontmatter)}
            <Navs />
            {post.frontmatter.image !== "" && (
                <Image
                    w="100%"
                    h="24rem"
                    backgroundSize="cover"
                    objectFit="cover"
                    rounded="lg"
                    src={post.frontmatter.image}
                    alt="Segun Adebayo"
                    mb={8}
                />
            )}
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
                <Text id="content" fontSize="1.2rem" color="gray.600" dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>
            <Navs />
            <DiscussionEmbed {...disqusConfig} />
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
                        image
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
                image
            }
        }
    }

`

