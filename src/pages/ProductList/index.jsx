import Products from '../../components/Products'
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from './style'

const index = () => {
  return (
    <Container>
      <Title>El Çantalerı</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Ürünleri Filtrele:</FilterText>
          <Select>
            <Option>Beyaz</Option>
            <Option>Siyah</Option>
            <Option>Kırmızı</Option>
            <Option>Mavi</Option>
            <Option>Sarı</Option>
            <Option>Yeşil</Option>
          </Select>
          <Select>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ürünleri Sırala:</FilterText>
          <Select>
            <Option>Varsayılan</Option>
            <Option>En Yeniler</Option>
            <Option>Artan Fiyat</Option>
            <Option>Azalan Fiyat</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  )
}

export default index
