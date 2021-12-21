import * as S from "./styles";
import Image from 'next/image'

type CardWeatherProps = {
  title: string
  max: string
  min: string
  img: string
}

export function CardWeather({title, max, min, img}: CardWeatherProps) {
  return (
    <S.Container>
      <S.Title>
        {title}
      </S.Title>
      <Image src={require(`./../../../public/img/${img}.png`).default} alt="Imagem referente a previsão do tempo"/>
      <div style={{display: "flex", gap: "16px"}}>
        <S.Temperature >
          {max}
        </S.Temperature>
        <S.Temperature gray>
          {min}
        </S.Temperature>
      </div>
    </S.Container>
  )
}
