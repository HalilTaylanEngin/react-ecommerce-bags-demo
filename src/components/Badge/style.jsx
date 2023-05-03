import styled from 'styled-components'
import { Colors } from '../../constants'
import { medium } from '../../responsive'
import { Link } from 'react-router-dom'

//badge *********************
export const Badge = styled(Link)`
  position: relative;
  height: 40px;
  width: 40px;
  color: ${Colors.textColor};
  ${medium({ height: 30, width: 30 })}
`

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Colors.textColor};
  font-size: 22px;
  ${medium({ fontSize: 18 })}
`
export const TextWrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.warning};
  padding: 1px;
  height: 30%;
  width: 30%;
  top: 30%;
  left: 70%;
  transform: translate(-50%, -50%);
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 7px;
  color: ${Colors.textColor};
  text-align: center;
`
