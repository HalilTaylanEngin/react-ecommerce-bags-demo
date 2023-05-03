import { Button, Container, Form, Input, Link, Title, Wrapper } from './style'

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Giriş Yap</Title>
        <Form>
          <Input placeholder='Kullanıcı Adı' />
          <Input placeholder='Sifre' />
          <Button>GIRIS</Button>
          <Link>Şifremi Unuttum</Link>
          <Link>Yeni Hesap</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
