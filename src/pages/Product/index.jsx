import Newsletter from '../../components/Newsletter'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper
} from './style'
import { popularProducts } from '../../data'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation()

   const id = location.pathname.split('/')[2]

  const currentProduct = popularProducts.filter(p => p.id === id)
  console.log(currentProduct);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={currentProduct[0].img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{currentProduct[0].title} </Title>
          <Desc>
          {currentProduct[0].desc}
          </Desc>
          <Price>{currentProduct[0].price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Renk</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='orange' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Ebat</FilterTitle>
              <FilterSize defaultValue={'M'}>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IoMdRemove />
              <Amount>1</Amount>
              <IoMdAdd />
            </AmountContainer>
            <Button>Sepete Ekle</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  )
}

export default Product
