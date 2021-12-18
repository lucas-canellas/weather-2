import * as S from './styles'
import { RiNavigationFill} from 'react-icons/ri'

export type WindStatusProps = {
  speed: string
  direction_compass: string
}

export function WindStatus({direction_compass,speed}: WindStatusProps) {
  return (
    <>
      <S.Container>
        <S.Heading>Wind status</S.Heading>
        <S.Speed>{speed}<span>mph</span></S.Speed>
        <S.SpeedDirectionContainer>
          <S.SpeedDirectionIcon>
            <RiNavigationFill fill="#FFF"/>
          </S.SpeedDirectionIcon>
          <S.SpeedDirectionText>{direction_compass}</S.SpeedDirectionText>
        </S.SpeedDirectionContainer>
      </S.Container>
    </>
  )
}
