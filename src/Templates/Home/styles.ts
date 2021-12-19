import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  @media (max-width: 991.98px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  background: #100E1D;
  min-height: 100vh;
  padding: 53px 1rem 1rem;
  flex-grow: 1;

`
export const ContentContainer = styled.div`
  max-width: 780px;
  margin: 0 auto;
`

export const DegreeBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`

export const CardWeatherBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 65px;
  justify-content: space-around;
  gap: 1.5rem;
`

export const TitleBox = styled.div`
  margin-top: 72px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #E7E7EB;
  }
`

export const HightlightsBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  margin-top: 32px;
  gap: 1.5rem;

  @media (max-width: 767.98px) {
      grid-template-columns: 1fr;

  }

`

export const FooterBox = styled.div`
text-align: center;
margin-top: 50px;
  p{
      font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #A09FB1;

    span {
      font-weight: 600;
    }
  }
`



