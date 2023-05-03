import styled from 'styled-components'
import { Colors } from '../../constants'
import { medium, small } from '../../responsive'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 0;
  background-color: ${Colors.backgrounColor};
  color: ${Colors.textColorLight};
  ${small({ flexDirection: 'column' })}
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${small({  padding:20})}
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-size: 30px;
  color: ${Colors.bagooPrimary};
  text-decoration: none;
  cursor: pointer;
  ${small({ fontSize:22})}
`

export const Image = styled.img`
  height: 50px;
  margin: 0 5px;
  ${small({ height:36})}
`

export const Desc = styled.p`
  margin: 16px 0;
  font-size: 14px;
`

export const SocialContainer = styled.div`
  display: flex;
  ${small({justifyContent: 'center'})}
  
`

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 40px;
`

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${small({alignItems: 'center'})}
`

export const Title = styled.h3`
  margin-bottom: 30px;
  font-family: 'Noto Sans TC', sans-serif;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 8px;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 12px;
  white-space: nowrap;
  ${medium({ width: '100%' })}
`

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
`

export const Payment = styled.img`
  width: 50%;
`
