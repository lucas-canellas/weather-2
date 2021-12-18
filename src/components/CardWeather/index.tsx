import { Container, Temperature, Title } from "./styles";
import Image from 'next/image'
import img from './../../../public/img/Clear.png'

type CardWeatherProps = {
  title: string
  max: string
  min: string
}

export function CardWeather({title, max, min}: CardWeatherProps) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Image src={img} alt="Imagem referente a previsão do tempo"/>
      <div style={{display: "flex", gap: "16px"}}>
        <Temperature >
          {max}
        </Temperature>
        <Temperature gray>
          {min}
        </Temperature>
      </div>


    </Container>
  )
}
