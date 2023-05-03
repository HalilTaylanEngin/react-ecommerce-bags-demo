import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import {
  Bottom,
  Button,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
/*   TopText,
  TopTexts, */
  Wrapper
} from './style'

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SEPETİM</Title>

        <Top>
          <TopButton>Alışverişe Devam Et</TopButton>
          {/* 
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {/* <TopButton type='filled'>CHECKOUT NOW</TopButton> */}
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='/images/o-bag-3.png' />
                <Details>
                  <ProductName>
                    <b>Kategori:</b>El Çantası
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color='coral' />
                  <ProductSize>
                    <b>Boyut:</b> Small
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IoMdAdd />
                  <ProductAmount>2</ProductAmount>
                  <IoMdRemove />
                </ProductAmountContainer>
                <ProductPrice>300 tl</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='/images/o-bag-4.png' />
                <Details>
                  <ProductName>
                    <b>Kategori:</b>El Çantası
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color='gray' />
                  <ProductSize>
                    <b>Boyut:</b> Small
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IoMdAdd />
                  <ProductAmount>1</ProductAmount>
                  <IoMdRemove />
                </ProductAmountContainer>
                <ProductPrice>200 tl</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Spariş Özeti</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Ara Toplam</SummaryItemText>
              <SummaryItemPrice>800 tl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Gönderim Ücreti</SummaryItemText>
              <SummaryItemPrice>59 tl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Gönderim İndirimi</SummaryItemText>
              <SummaryItemPrice>59 tl</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Toplam</SummaryItemText>
              <SummaryItemPrice>800 tl</SummaryItemPrice>
            </SummaryItem>
            <Button>Alışverişi Tamamla</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Cart
