import { Flex, Link, Heading } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Searchbox from './Searchbox'

const Header = () => {
  return (
    <Flex gap="3" width="100%" p="4" justify="between">
      <Heading as="h2" size="5">
        La Bodega
      </Heading>
      <Searchbox />
      <Link href="/login">Log in</Link>
      <Link
        size="2"
        href="https://github.com/alexserver/la-bodega"
        target="_blank"
      >
        <GitHubLogoIcon />
      </Link>
    </Flex>
  )
}

export default Header
