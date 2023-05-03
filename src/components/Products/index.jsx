import { popularProducts } from '../../data'
import Product from '../Product'
import { Container, Wrapper } from './style'

const Products = () => {
  return (
    <Container>
      <Wrapper>
        {popularProducts.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Products
