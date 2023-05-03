import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './style'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Yeni Hesap Oluştur</Title>
        <Form>
          <Input placeholder='İsim' />
          <Input placeholder='Soy İsim' />
          <Input placeholder='Kullanıcı Adı' />
          <Input placeholder='E-mail' />
          <Input placeholder='Şifre' />
          <Input placeholder='Şifreyi Tekrar Gir' />
          <Agreement>
            Hesap oluşturarak, kişisel verilerimin uygun şekilde işlenmesine izin veriyorum.
            <b>Gizlilik Şartları</b>
          </Agreement>
          <Button>GÖNDER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
