import { AiFillFacebook, AiFillInstagram, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Image,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title
} from './style'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo to='/'>
          Bagoo
          <Image src='/bb-logo/png/logo-no-background.png' alt='logo-png-photo' />
          Born
        </Logo>
        <Desc>
          Bago Born, el yapımı çanta tutkunlarının yeni gözdesi! Doğal malzemelerden üretilen, özgün
          tasarımlı ve kaliteli çantalar , her zevke ve tarza uygun renk ve model seçenekleriyle
          dikkat çekiyor. Bago Born çantalarıyla, stilinizi tamamlayın, farkınızı ortaya koyun!
        </Desc>
        <SocialContainer>
          <SocialIcon color='#eeeeee'>
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color='#eaeaea'>
            <AiFillInstagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Hızlı Erişim</Title>
        <List>
          <ListItem>Başa Dön</ListItem>
          <ListItem>Sepetim</ListItem>
          <ListItem>El Çantaları</ListItem>
          <ListItem>Mini Çantalar</ListItem>
          <ListItem>Omuz Çantaları</ListItem>
          <ListItem>Hesabım</ListItem>
          <ListItem>Ürün Takibi</ListItem>
          <ListItem>İstek Listesi</ListItem>
          <ListItem>Şartlar</ListItem>
        </List>
      </Center>
      <Right>
        <Title>İletişim</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{ marginRight: '10px' }} /> 278/5. Sk. Manavkuyu, Bayraklı/İzmir
        </ContactItem>
        <ContactItem>
          <AiFillPhone style={{ marginRight: '10px' }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: '10px' }} /> bagooborn@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer
