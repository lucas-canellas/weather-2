import * as S from './styles'
import ProgressBar from "@ramonak/react-progress-bar";

export type HumidityProps = {
  percent: string
}

export function Humidity({ percent }: HumidityProps) {
  return (
    <>
      <S.Container>
        <S.Heading>Humidity</S.Heading>
        <S.PercentHumidity>{percent}<span>%</span></S.PercentHumidity>
        <S.LabelProgressBarContainer>
          <p>0</p>
          <p>50</p>
          <p>100</p>
        </S.LabelProgressBarContainer>
        <ProgressBar isLabelVisible={false} completed={percent} width="230px" height="8px" bgColor="#FFEC65" />
        <S.BottonLabelProgressBarContainer><p>%</p></S.BottonLabelProgressBarContainer>
      </S.Container>
    </>
  )
}
