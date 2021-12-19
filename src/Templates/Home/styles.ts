import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media(max-width: 1280px) {
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
  gap: 26px;
  margin-top: 65px;

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
  grid-template-columns: 1fr 1fr;
  margin-top: 32px;
  gap: 48px;

  @media(max-width: 1280px) {
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



