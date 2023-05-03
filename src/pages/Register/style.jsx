import styled from 'styled-components'
import { Colors } from '../../constants'
import { medium, small } from '../../responsive'

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(${Colors.backgrounColorOpac}, ${Colors.backgrounColorOpac}),
    url('/images/o-bag-5.png') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${Colors.textColor};
`

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: ${Colors.backgrounColor};
  border-radius: 12px;
  ${medium({ width: '70%' })}
  ${small({ width: '90%' })}
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: ${Colors.titleColorLight};
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 10px;
  padding: 10px;
  background-color: ${Colors.backgrounColorLight};
  color: ${Colors.textColor};
  outline: none;
  border: none;
  border-radius: 8px;

  &::placeholder {
    color: ${Colors.textColor};
  }
`
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

export const Button = styled.button`
  width: 40%;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 20px 1px ${Colors.borderColor};
  background-color: ${Colors.backgrounColorDark};
  color: ${Colors.textColor};
  outline: none;
  transition: all 400ms ease;
  &:hover {
    background-color: ${Colors.backgrounColor};
  }
  ${small({ width: '100%' })}
`
