import styled from 'styled-components'
import { Colors } from '../../constants'
import { small } from '../../responsive'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: ${Colors.backgrounColorDark};
  ${small({ flexDirection: 'column',height: 'auto',  padding: '10px 8px' })}
`
