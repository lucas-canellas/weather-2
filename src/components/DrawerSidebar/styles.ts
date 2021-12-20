import styled from 'styled-components'

export const Container = styled.div`
  min-width: max(320px, 25%);
  background: #1E213A;
  height: 100vh;

`

export const CloseIconBox = styled.div`
  padding: 50px 50px 25px 50px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

`

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 268px;
  height: 48px;
  border: 1px solid #E7E7EB;
  background: #1E213A;
  padding: 0 1rem;


  input {
    background: #1E213A;
    width: 100%;
    height: 100%;
    margin-left: .5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #616475;
  }
`

export const Box = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 86px;
  height: 48px;
  background: #3C47E9;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #E7E7EB;
  border: none;
  cursor: pointer;
`


