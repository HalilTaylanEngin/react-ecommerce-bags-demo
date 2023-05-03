import styled from 'styled-components'
import { Colors } from '../../constants'
import { small } from '../../responsive'

export const Container = styled.div`
  min-height: 60vh;
  background-color: ${Colors.backgrounColorDark};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
  color: ${Colors.textColorLight};
  ${small({ padding: 4 })}
`
export const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  font-family: 'Noto Sans TC', sans-serif;
  ${small({ fontSize: 30, padding: 4 })}
`

export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  ${small({ fontSize: 16 })}
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 70%;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 1px ${Colors.backgrounColor};
  ${small({ fontSize: 1 ,width: '96%'})}
`

export const Input = styled.input`
  height: 100%;
  width: 80%;
  border: none;
  padding-left: 10px;
  border-radius: 8px 0 0 8px;
  color: ${Colors.textColorLight};
  background-color: ${Colors.backgrounColorLight};
  outline: none;

  &::placeholder {
    color: ${Colors.textColor};
    font-size: 12px;
  }
`

export const Button = styled.button`
  height: 100%;
  width: 20%;
  border: none;
  background-color: ${Colors.warning};
  color: ${Colors.textColor};
  border-radius: 0 8px 8px 0;
  cursor: pointer;
`
