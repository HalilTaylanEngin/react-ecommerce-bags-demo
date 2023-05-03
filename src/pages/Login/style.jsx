import styled from 'styled-components'
import { Colors } from '../../constants'
import { medium, small } from '../../responsive'

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(${Colors.backgrounColorOpac}, ${Colors.backgrounColorOpac}),
    url('/images/o-bag-4.png') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.textColor};
`

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: ${Colors.backgrounColor};
  border-radius: 12px;
  ${medium({width:'70%'})}
  ${small({width:'90%'})}
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: ${Colors.titleColorLight};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  background-color: ${Colors.backgrounColorLight};
  color: ${Colors.textColor};
  outline: none;
  border: none;
  border-radius: 8px;

  &::placeholder{
    color:  ${Colors.textColor};
  }
`

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: ${Colors.backgrounColorDark};
  color: ${Colors.textColor};
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 0 20px 1px ${Colors.borderColor};
  ${small({width:'100%'})}
`

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`