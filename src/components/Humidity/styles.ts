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

export const PercentHumidity = styled.p`
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

export const LabelProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;

  p {
    color: #A09FB1;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 2px;
  }
`

export const BottonLabelProgressBarContainer = styled.div`
  width: 230px;

  p {
    color: #A09FB1;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 2px;
    text-align: end;
    margin-top: 2px;
  }
`

