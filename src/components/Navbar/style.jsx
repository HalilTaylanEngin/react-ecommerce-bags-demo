import styled from 'styled-components'

import { Colors, Fonts } from '../../constants'
import { medium, small } from '../../responsive'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 60px;
  background-color: ${Colors.backgrounColorDark};
  color: ${Colors.textColor};
  position: relative;
  ${medium({ height: 40, marginBottom: 40 })}
`

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${medium({ padding: '4px 10px' })}
  ${small({ padding: '4px 4px' })}
`

// left***********************************
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${medium({
    position: 'absolute',
    top: 40,
    left: 0,
    background: `${Colors.backgrounColorLight}`,
    zIndex: 2,
    padding: '2px 16px',
    width: '100%',
    height: 40
  })}
`

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  border: 0.5px solid ${Colors.borderColor};
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  border-radius: 4px;
  flex-grow: 1;

  ${medium({ borderColor: `${Colors.textColor}` })}
  ${small({ border: 'none', marginLeft: 5 })}
`

export const Input = styled.input`
  border: none;
  background-color: inherit;
  outline: none;
  width: 100%;
  padding-inline: 10px;
  color: ${Colors.textColor};

  &::placeholder {
    color: ${Colors.textColor};
  }
`
// center**************************
export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${medium({ justifyContent: 'flex-start' })}
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 22px;
  color: ${Colors.bagooPrimary};
  text-decoration: none;
  cursor: pointer;
  ${medium({ fontSize: 18, justifyContent: 'flex-start' })}
  ${small({ fontSize: 14 })}
`

export const Image = styled.img`
  height: 40px;
  margin: 0 5px;
  ${medium({ height: 30 })}
  ${small({ height: 22, margin: 3 })}
`

// right*************************
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  white-space: nowrap;
  font-family: 'Noto Sans TC', sans-serif;
  text-decoration: none;
  color: ${Colors.textColor};
  ${medium({ fontSize: 18 })}
  ${small({ fontSize: 16, marginLeft: 8 })}
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`
export const MenuItemTag = styled.h4`
  text-align: left;
  font-family: ${Fonts.noto};

  ${small({ display: 'none' })}
`
