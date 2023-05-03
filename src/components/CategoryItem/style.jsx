import styled from 'styled-components'
import { Colors } from '../../constants'
import { large, medium, small } from '../../responsive'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  margin: 10px;
  height: 70vh;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.backgrounColor};
  padding: 20px;
  ${large({ padding: 10 })}
`

export const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  ${large({ height: '75%' })}
  ${medium({ height: '50%' })}
`

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${small({ position: 'relative', flex: 1 })}
`

export const Title = styled.h2`
  color: ${Colors.titleColorLight};
  margin-bottom: 20px;
  font-family: 'Noto Sans TC', sans-serif;
  ${large({ fontSize: '20px' })}
  ${medium({ fontSize: '14px' })}
`

export const Button = styled(Link)`
  padding: 10px;
  background-color: ${Colors.backgrounColorOpac};
  color: ${Colors.textColorLight};
  cursor: pointer;
  font-weight: 600;
  cursor: pointer;
  color: ${Colors.textColor};
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 20px 1px ${Colors.borderColor};
  transition: all 300ms ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    background-color: ${Colors.backgrounColorDark};
  }
  ${large({ padding: '8px' })}
`
