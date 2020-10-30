import React from 'react'
import Layout from "../components/layout";
import {
    Text
} from "@chakra-ui/core"
import SEO from "../components/seo"
export default function AboutPage() {
    return (
        <Layout>
            <SEO title="Tentang" />
            <Text color="teal.400" fontSize="2.5rem">Tentang, ya...</Text>
            <Text color="gray.500" fontSize="1.3rem">
                Untuk sekarang website ini akan berisi cerita yang kubuat sendiri, tapi ini tidak menutupi kemungkinan bakal berkembang dan saya sendiri akan dengan senang hati apabila ada yang ingin bekerja sama atau sekedar menaruh ceritanya di website kecil-kecilan ini. Kedepannya apabila diberi kesempatan, saya akan mengembangkan teknologi dan fitur website ini seiring dengan waktu.
            </Text>
            <Text color="teal.600" fontSize="1.3rem" mt={4}>
                <b>Facebook</b> : <a href="https://web.facebook.com/profile.php?id=100018113778368">Bayu Setiawan</a>
            </Text>
            <Text color="teal.600" fontSize="1.3rem">
                <b>Email</b> : mirrorbottle24@gmail.com
            </Text>
        </Layout>
    )
}
