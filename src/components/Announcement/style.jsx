import styled from 'styled-components'
import { Colors } from '../../constants'
import { small } from '../../responsive'

export const Container = styled.div`
  height: 30px;
  background-color: ${Colors.warning};
  color: ${Colors.textColorLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${small({ fontSize: 9, fontWeight:300 , height:30 })}
`
