import styled from 'styled-components'
import { Colors } from '../../constants'
import { medium, small } from '../../responsive'

export const Container = styled.div`
  padding: 10px 0 20px 0;
  background-color: ${Colors.backgrounColorLight};
  color: ${Colors.textColor};
`

export const Title = styled.h1`
  margin: 20px;
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${small({ flexDirection: 'column' })}
`

export const Filter = styled.div`
  margin: 20px;
  display: flex;
  ${medium({ margin: 10 })}
  ${small({ justifyContent: 'space-between', whiteSpace: 'nowrap', margin: 4 })}
`

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${medium({ fontSize: 14 })}
  ${small({ marginRight: 4, padding: 4 })}
`

export const Select = styled.select`
  width: 120px;
  padding: 15px;
  margin-right: 20px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 20px 1px ${Colors.borderColor};
  background-color: ${Colors.backgrounColorDark};
  color: ${Colors.textColor};
  outline: none;
  ${medium({ padding: '15px 4px' })}
  ${small({ marginRight: 4 ,width: 80})}
`
export const Option = styled.option`
  border: none;
  border-radius: 8px;
  font-size: inherit;
`
