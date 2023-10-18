import Image from 'next/image'
import { Box, Container, Heading } from '@radix-ui/themes'
import Header from '../components/Header'
import ProductList, { type ProductListProps } from '../components/ProductList'
import { supabase } from '@/lib/supabase'

const getProducts = async () => {
  const { data, error } = await supabase.from('product').select()

  if (error) {
    throw new Error('Error getting table data')
  }

  const products = data.map(({ name, description, price }) => ({
    name,
    price,
    description,
    imageUrl: '',
  })) as ProductListProps['products']

  return { products }
}

export default async function Home() {
  // fetch products from supabase

  const { products } = await getProducts()

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
