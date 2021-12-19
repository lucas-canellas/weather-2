import * as S from "./styles";
import Image from 'next/image'
import img from './../../../public/img/Clear.png'

type CardWeatherProps = {
  title: string
  max: string
  min: string
}

export function CardWeather({title, max, min}: CardWeatherProps) {
  return (
    <S.Container>
      <S.Title>
        {title}
      </S.Title>
      <Image src={img} alt="Imagem referente a previsão do tempo"/>
      <div style={{display: "flex", gap: "16px"}}>
        <S.Temperature >
          {max}
        </S.Temperature>
        <S.Temperature gray>
          {min}
        </S.Temperature>
      </div>
0

    </S.Container>
  )
}
