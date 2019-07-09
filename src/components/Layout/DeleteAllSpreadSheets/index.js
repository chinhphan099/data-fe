import React from 'react'
import { Wrapper, Button } from './styled'

export default ({ onClick }) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>
        Delete All Spread Sheets
      </Button>
    </Wrapper>
  )
}
