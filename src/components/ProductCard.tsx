import { Box, Button, Card, Flex, Inset, Text } from '@radix-ui/themes'
import Image from 'next/image'

export type ProductCardProps = {
  name: string
  price: string
  description: string
  imageUrl: string
}

const ProductCard = ({
  name,
  price,
  description,
  imageUrl,
}: ProductCardProps) => {
  return (
    <Card className="max-w-xs">
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          width={250}
          height={250}
          src={imageUrl}
          alt="Bottle"
          className="w-full max-h-72 object-cover"
        />
      </Inset>
      <Flex gap="4" direction="column">
        <Flex justify="between">
          <Text size="5" weight="bold" color="indigo">
            {name}
          </Text>
          <Text size="5" weight="bold" color="crimson">
            {price}
          </Text>
        </Flex>
        <Flex justify="between">
          <Text size="1" weight="regular">
            {description}
          </Text>
          <Button>Add to Cart</Button>
        </Flex>
      </Flex>
    </Card>
  )
}

export default ProductCard
