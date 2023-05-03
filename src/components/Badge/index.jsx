import React from 'react'
import { IconWrapper, Badge, Text, TextWrapper } from './style'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const index = () => {
  return (
    <Badge to={'/cart'}>
      <IconWrapper>
        <AiOutlineShoppingCart />
      </IconWrapper>
      <TextWrapper>
        <Text>4</Text>
      </TextWrapper>
    </Badge>
  )
}

export default index
