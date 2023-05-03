import { MdOutlineSend } from 'react-icons/md'
import { Button, Container, Desc, Input, InputContainer, Title } from './style'

const Newsletter = () => {
  return (
    <Container>
      <Title>Bildirimleri Al</Title>
      <Desc>Favori ürünlerinizdeki değişikliklerden haberdar olun</Desc>
      <InputContainer>
        <Input placeholder='E-Mail Adresiniz..' />
        <Button>
          <MdOutlineSend />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
