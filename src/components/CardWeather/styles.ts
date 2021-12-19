import styled from 'styled-components'

type TemperatureProps = {
  gray?: true
}

export const Container = styled.div`
  flex-grow: 1;
  background: #1E213A;
  max-width: 135px;
  padding: 18px 22px;
`

export const Title = styled.p`
  color: #E7E7EB;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
`


export const Temperature = styled.p<TemperatureProps>`
  margin-top: 31px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.gray ? "#A09FB1" : "#E7E7EB"};
`


