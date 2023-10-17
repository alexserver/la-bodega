import Image from 'next/image'
import { Box, Container, Heading } from '@radix-ui/themes'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { products } from '../data/mock.products'

export default function Home() {
  return (
    <Container size="4" className="min-h-screen flex flex-col justify-stretch">
      <Header />
      <Box py="6">
        <Heading as="h1" size="7" my="9">
          Our Top Products!
        </Heading>
        <ProductList products={products} />
      </Box>
    </Container>
  )
}
