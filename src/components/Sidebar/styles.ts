import styled from 'styled-components';
import img from './../../../public/img/Cloud-background.png'

export const Container = styled.div`
background-color: #1E213A;
min-width: max(320px, 25%);


`

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding-top: 50px;

`

export const ButtonSearch = styled.button`
  background: #6E707A;
  width: 160px;
  height: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;

  p {
    color: #E7E7EB;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`

export const ButtonLocation = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #6E707A;
  cursor: pointer;
`

export const DataContainer = styled.div`
  text-align: center;
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center ;
  background: url(${img.src});
  box-shadow: inset 0 0 0 10000px rgba(30, 33, 58, 0.95);
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
`

export const Degree = styled.p`
  color: #E7E7EB;
  font-style: normal;
  font-weight: 500;
  font-size: 144px;


  span {
    color: #A09FB1;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
  }
`

export const WeatherState = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  color: #A09FB1;
  padding: 87px 0;
`

export const ContainerDateCity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  gap: .4rem;
`

export const Date = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #88869D;
`

export const City = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #88869D;
`

