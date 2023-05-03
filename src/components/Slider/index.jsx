import { useState } from 'react'
import { sliderItems } from '../../data'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import {
  Arrow,
  Button,
  Container,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper
} from './style'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <SlArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button to='/productList'>Simdi Al</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <SlArrowRight />
      </Arrow>
    </Container>
  )
}

export default Slider
