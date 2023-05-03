import { Image,Button, Container,  Info, Title } from './style'



const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt='not fount' />
      <Info>
        <Title>{item.title}</Title>
        <Button to={'ProductList'} >Göz At</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
