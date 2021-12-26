import * as S from './styles'
import { MdNavigation} from 'react-icons/md'

export type WindStatusProps = {
  speed: string
  direction_compass: string
  wind_direction: string
}

export function WindStatus({ direction_compass, speed, wind_direction}: WindStatusProps) {
  return (
    <>
      <S.Container>
        <S.Heading>Wind status</S.Heading>
        <S.Speed>{speed}<span>mph</span></S.Speed>
        <S.SpeedDirectionContainer>
          <S.SpeedDirectionIcon>
            <MdNavigation fill="#FFF" style={{ transform: `rotate(${wind_direction}deg)` }}/>
          </S.SpeedDirectionIcon>
          <S.SpeedDirectionText>{direction_compass}</S.SpeedDirectionText>
        </S.SpeedDirectionContainer>
      </S.Container>
    </>
  )
}
