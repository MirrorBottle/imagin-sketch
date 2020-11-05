import React from "react"
import {
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    Form,
    FormHelperText,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FormPage = () => (
    <Layout>
        <SEO title="Pengajuan" />
        <Text color="teal.400" fontSize="2.5rem" mb={2} fontWeight="bold">Ajukan Ceritamu!</Text>
        <Text color="gray.600" fontSize="1.1rem" mb={6}>Kamu bisa mengajukan ceritamu dan kami dengan senang hati akan mengeceknya, dan apabila berhasil maka akan kami tampilkan di web ini. Tidak perlu terlalu sempurna, asal tidak mengandung konten dewasa yang <Text d="inline" color="red.500" fontWeight="bold">berlebihan</Text> maka sudah layak 😄</Text>
        <form method="POST" netlify-honeypot="bot-field" data-netlify="true" name="submission" encType="multipart/form-data">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="submission" />
            <FormControl isRequired>
                <FormLabel htmlFor="penName">Nama Pena</FormLabel>
                <input requreid id="penName" type="text" name="penName" placeholder="Nama penamu..." />
            </FormControl>
            <FormControl isRequired mt={6}>
                <FormLabel htmlFor="title">Judul Karyamu</FormLabel>
                <input required id="title" type="text" name="title" placeholder="Judul sangat penting..." />
            </FormControl>
            <FormControl isRequired mt={6}>
                <FormLabel htmlFor="tags">Genre atau Tema Ceritamu</FormLabel>
                <input required id="tags" type="text" name="tags" placeholder="Ketik genre karyawamu..." />
                <FormHelperText>
                    Apabila lebih dari satu gunakan "," (koma) sebagai pemisah.
                </FormHelperText>
            </FormControl>
            <FormControl isRequired mt={6}>
                <FormLabel htmlFor="file">Berkas Ceritamu (.doc / .md / .pdf)</FormLabel>
                <input required id="file" type="file" name="story" />
            </FormControl>
            <Button variantColor="teal" mt={6} type="submit" w="100%">Ajukan!</Button>
        </form>
    </Layout>
)

export default FormPage
