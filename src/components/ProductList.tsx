import { Box, Grid } from '@radix-ui/themes'
import ProductCard, { type ProductCardProps } from './ProductCard'

export type ProductListProps = {
  products: Array<ProductCardProps>
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Box>
      <Grid columns="3" gapX="3" gapY="5" width="100%">
        {products.map(({ name, price, description, imageUrl }) => (
          <ProductCard
            key={name}
            name={name}
            price={price}
            description={description}
            imageUrl={imageUrl}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default ProductList
