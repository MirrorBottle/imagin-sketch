import React from 'react'
import Layout from "../components/layout";
import { graphql } from "gatsby"
import {
    Text,
    Box,
    Stack,
    Badge,
} from "@chakra-ui/core"
import SEO from "../components/seo"
export default function Template({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Text color="teal.400" fontSize="2.5rem" fontWeight="bold">{post.frontmatter.title}</Text>
            <Text color="gray.500" fontSize="1.3rem" textAlign="left">
                Ditulis oleh <Text d="inline" color="teal.500">{post.frontmatter.author}</Text>
            </Text>
            <Stack isInline spacing={8} mt={2} mb={8}>
                {post.frontmatter.tags.split(',').map((tag) => (
                    <Badge variantColor="teal" py={1} px={3}>{tag}</Badge>
                ))}
            </Stack>
            <Box mt={8} >
                <Text id="content" color="gray.600" dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>
        </Layout>

    )
}

export const PostQuery = graphql`
    query BlogPostByPath($path: String!) {
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

