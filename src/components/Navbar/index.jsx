import React from 'react'

import { AiOutlineSearch, AiOutlineSave, AiOutlineLogin } from 'react-icons/ai'
import Badge from '../Badge'
import {
  Center,
  Container,
  Icon,
  Image,
  Input,
  /*  Language, */
  Left,
  Logo,
  MenuItem,
  MenuItemTag,
  Right,
  SearchContainer,
  Wrapper
} from './style'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/*    <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder='Ara..' />
            <AiOutlineSearch />
          </SearchContainer>
        </Left>
        <Center>
          <Logo to={'/'}>
            Bagoo
            <Image src='/bb-logo/png/logo-no-background.png' alt='logo-png-photo' />
            Born
          </Logo>
        </Center>
        <Right>
          <MenuItem to={'/register'}>
            <Icon>
              <AiOutlineSave />
            </Icon>
            <MenuItemTag>Üye Ol</MenuItemTag>
          </MenuItem>
          <MenuItem to={'/login'}>
            <Icon>
              <AiOutlineLogin />
            </Icon>
            <MenuItemTag>Giriş</MenuItemTag>
          </MenuItem>
          <Badge />
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
