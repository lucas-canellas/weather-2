import * as S from './styles'

export type DegreeProps = {
  background: string
  color: string
  children: React.ReactNode
}

export function Degree({ background, color, children }: DegreeProps) {
  return (
    <>
      <S.Container background={background} color={color}>
        <S.Title>{children}</S.Title>
      </S.Container>
    </>
  )
}
