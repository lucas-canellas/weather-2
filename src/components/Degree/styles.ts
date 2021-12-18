import styled from 'styled-components'
import { DegreeProps } from '.'

export const Container = styled.button<DegreeProps>`
  background: ${props => props.background};
  color: ${props => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`
