import Image from 'next/image'
import { Box, Container, Heading } from '@radix-ui/themes'
import Header from '../components/Header'
import ProductList, { type ProductListProps } from '../components/ProductList'
import { supabase } from '@/lib/supabase'

const getProducts = async () => {
  const { data, error } = await supabase.from('product').select(`
    name,
    description,
    price,
    product_image(
      url
    )
  `)

  if (error) {
    throw new Error(error.message)
  }

  console.log(data?.at(0)?.product_image)

  const products = data.map(({ name, description, price, product_image }) => ({
    name,
    price,
    description,
    imageUrl: product_image.at(0)?.url ?? '',
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
        <Heading as="h1" size="7" my="2">
          Our Top Products!
        </Heading>
        <ProductList products={products} />
      </Box>
    </Container>
  )
}
