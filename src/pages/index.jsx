import React from "react"
import {
  Text,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text color="teal.400" fontSize="1.8rem">
      <i>
        "Kurasa aku senang menulis, kisah tragis dengan tangis, ataupun kisah bahagia dengan tawa. Entahlah, hingga kapan aku bisa menulis, jika bisa aku ingin terus melakukannya."
      </i>
    </Text>
    <Text color="teal.400" fontSize="1.8rem" mt={2} fontWeight="bold">
      <i>-Bukan Perkataanku</i>
    </Text>
  </Layout>
)

export default IndexPage
