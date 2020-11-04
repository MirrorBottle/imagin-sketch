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
    Input,
    Collapse,
    Checkbox,
} from "@chakra-ui/core"
import SEO from "../components/seo"

export default class stories extends React.Component {
    state = {
        stories: [],
        realData: [],
        selectedTags: [],
        tags: [],
        showTagsCollapse: false,
    }
    handleToggle = () => this.setState({ showTagsCollapse: !this.state.showTagsCollapse });
    onSearchChange = (e) => {
        const { realData } = this.state;
        const stories = e.target.value !== "" ? realData.filter(({ node }) => node.frontmatter.title.toUpperCase().includes(e.target.value.toUpperCase())) : realData;
        this.setState({ stories })
    }
    onTagSelect = (tag) => {
        const { selectedTags } = this.state;
        this.setState({
            selectedTags: selectedTags.includes(tag) ? selectedTags.filter(selectedTag => selectedTag !== tag) : [...selectedTags, tag]
        }, () => {
            const { realData, selectedTags } = this.state;
            const stories = realData.filter(({ node }) => node.frontmatter.tags.split(", ").some(tag => selectedTags.indexOf(tag) >= 0));
            this.setState({ stories: selectedTags.length > 0 ? stories : realData })
        })
    }
    clearTags = () => this.setState({ selectedTags: [], stories: this.state.realData })
    componentDidMount() {
        const { data } = this.props;
        const stories = data.allMarkdownRemark.edges.sort((a, b) => {
            return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
        });
        const tags = [...new Set([].concat.apply([], data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.tags.split(", "))))];
        this.setState({ stories, tags, realData: stories })
    }
    render() {
        const { stories, tags, selectedTags, showTagsCollapse } = this.state;
        return (
            <Layout>
                <SEO title="Cerita" />
                <Text color="teal.400" fontSize="2.5rem" fontWeight="bold">Cerita</Text>
                <Text color="gray.400" fontSize="1.5rem">Total Cerita :  <Text color="teal.400" d="inline" fontSize="1.5rem" fontWeight="bold">{stories.length}</Text></Text>
                <Stack spacing={4} isInline>
                    <Input w={{ base: "60%", sm: "60%", md: "85%", lg: "85%" }} placeholder="Cari ceritamu..." mt={2} style={{ border: "2px solid #319795" }} onChange={this.onSearchChange} />
                    <Button variantColor="teal" onClick={this.handleToggle} mt={2} w={{ base: "40%", sm: "40%", md: "15%", lg: "15%" }}>Tags</Button>
                </Stack>
                <Collapse mt={4} isOpen={showTagsCollapse}>
                    {tags.map((tag, index) => (
                        <Checkbox onChange={() => this.onTagSelect(tag)} isChecked={selectedTags.includes(tag)} variantColor="teal" width={{ base: "30%", sm: "30%", md: "20%", lg: "20%" }} mt={2} key={index}>{tag}</Checkbox>
                    ))}
                    <Button variantColor="teal" onClick={this.clearTags} mt={4} w="100%">Clear Tags</Button>
                </Collapse>
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
