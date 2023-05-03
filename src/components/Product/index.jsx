import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { Circle, Container, Icon, Image, Info } from './style'

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon to={'/product/' + item.id}>
          <AiOutlineSearch />
        </Icon>
        <Icon>
          <MdFavoriteBorder />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
