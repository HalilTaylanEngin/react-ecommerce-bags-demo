import styled from 'styled-components'
import { Colors } from '../../constants'
import { small } from '../../responsive'
import { Link } from 'react-router-dom'

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 270px;
  max-width: 270px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  ${small({ minWidth: 230, maxWidth: 230, height: 230 })}
`

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${Colors.backgrounColorLight};
  position: absolute;
  ${small({ width: '80%', height: '80%' })}
`

export const Image = styled.img`
  height: 75%;
  z-index: 2;
`

export const Icon = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${Colors.backgrounColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 2px 2px 20px 1px ${Colors.borderColor};
  color: ${Colors.textColor};
  transition: all 400ms ease;
  &:hover {
    background-color: ${Colors.backgrounColorLight};
    transform: scale(1.2);
  }
`
