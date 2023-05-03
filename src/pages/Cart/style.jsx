import { Colors } from '../../constants'
import styled from 'styled-components'
import { large, medium, small } from '../../responsive'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${Colors.backgrounColorDark};
  color: ${Colors.textColor};
  ${large({ fontSize: '70%' })}
`

export const Wrapper = styled.div`
  padding: 20px;
  ${small({ padding: '20px 4px' })}
`

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${small({ padding: '20px 4px', flexDirection: 'column' })}
`

export const TopButton = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 1px ${Colors.borderColor};
  white-space: nowrap;
  background-color: ${props =>
    props.type === 'filled' ? `${Colors.backgrounColorDark}` : `${Colors.backgrounColorLight}`};
  color: ${Colors.textColor};
  transition: all 400ms ease;

  &:hover {
    transform: scale(1.1);
  }

  ${large({ fontSize: '70%' })}
  ${small({ padding: '8px 4px' })}
`

export const TopTexts = styled.div`
  ${large({ fontSize: '70%' })}
`
export const TopText = styled.span`
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
  margin: 0px 10px;
  ${large({ fontSize: '70%' })}
  ${small({ margin: 4 })}
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${medium({ flexDirection: 'column' })}
`

export const Info = styled.div`
  flex: 3;
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductDetail = styled.div`
  flex: 4;
  display: flex;
  ${small({ flexDirection:'column' })}
`

export const Image = styled.img`
  width: 200px;
  ${small({ width: 120 })}
`

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${small({ padding: 4 })}
`

export const ProductName = styled.span``

export const ProductId = styled.span``

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`

export const ProductSize = styled.span``

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${small({ fontSize: 14 })}
`

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${large({ fontSize: 14 })}
`

export const Hr = styled.hr`
  background-color: ${Colors.borderColor};
  border: none;
  height: 1px;
`

export const Summary = styled.div`
  flex: 1;
  border-left: 1px solid ${Colors.borderColor};
  padding: 20px;
  height: 50vh;
  ${medium({ border: 'none' })}
  ${small({ padding: '20px 4px' })}
`

export const SummaryTitle = styled.h1`
  font-weight: 200;
`

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 1px ${Colors.borderColor};
  background-color: ${Colors.backgrounColorDark};
  color: ${Colors.textColor};
  outline: none;
  white-space: nowrap;
  transition: all 400ms ease;
  &:hover {
    background-color: ${Colors.backgrounColor};
  }
`
