import React from 'react'

import { Button } from '@mui/material'

export default function Enlaces(page) {
  return (
    <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.href}
              >
                {page.nombrePage}
    </Button>
  )
}
