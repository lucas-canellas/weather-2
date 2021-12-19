import * as S from './styles'
import ProgressBar from "@ramonak/react-progress-bar";

export type HighlightCardProps = {
  title: string
  value: string
  metric: string
}

export function HighlightCard({ title,metric,value }: HighlightCardProps) {
  return (
    <>
      <S.Container>
        <S.Heading>{title}</S.Heading>
        <S.Value>{value}<span>{metric}</span></S.Value>
      </S.Container>
    </>
  )
}
