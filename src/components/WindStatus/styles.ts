import styled from 'styled-components'

export const Container = styled.div`
  background-color: #1E213A;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 0;
  flex-grow: 1;


`
export const Heading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #E7E7EB;
`

export const Speed = styled.p`
  font-weight: 700;
  font-size: 64px;
  line-height:75px ;
  color: #E7E7EB;
  margin-bottom: 1rem;

  span {
    font-weight: 500;
    font-size: 36px;
    line-height:42px;
    color: #E7E7EB;
  }
`
export const SpeedDirectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SpeedDirectionIcon = styled.button`
  background: rgba(255, 255, 255, 0.3);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
`

export const SpeedDirectionText = styled.p`
  color: #E7E7EB;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`
