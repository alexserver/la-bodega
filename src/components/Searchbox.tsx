'use client'
import { Box, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const Searchbox = () => {
  return (
    <Box className="w-6/12">
      <TextField.Root radius="small">
        <TextField.Input placeholder="Search" />
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  )
}

export default Searchbox
