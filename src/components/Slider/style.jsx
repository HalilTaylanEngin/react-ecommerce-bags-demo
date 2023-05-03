import styled from 'styled-components'
import { Colors } from '../../constants'
import { large, medium, small } from '../../responsive'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  color: ${Colors.textColorLight};
`

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${Colors.backgrounColorDark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  ${medium({ width: 40, height: 40 })}
  ${small({ width: 30, height: 30 })}
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${Colors.backgrounColor};
  ${small({ flexDirection: 'column' })}
`

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${large({ justifyContent: 'flex-start', flex: 1 / 3, height: '70%' })}
  ${medium({ justifyContent: 'flex-start', flex: 1 / 3, height: '50%' })}
`

export const Image = styled.img`
  height: 100%;
`

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${large({ justifyContent: 'flex-start', flex: 2 / 3, padding: 20 })}
`

export const Title = styled.h1`
  font-size: 60px;
  font-family: 'Noto Sans TC', sans-serif;
  ${large({ fontSize: '36px' })}
  ${small({ fontSize: '20px', paddingTop: 20, textAlign: 'center' })}
`

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${large({ fontSize: '14px' })}
  ${small({ fontSize: '12px', margin: '20px 0' })}
`

export const Button = styled(Link)`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: ${Colors.textColor};
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 20px 1px ${Colors.borderColor};
  transition: all 400ms ease;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }

  ${large({ fontSize: '14px', padding: '8px' })}
`
