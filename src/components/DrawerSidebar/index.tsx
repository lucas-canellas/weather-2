import * as S from './styles'
import { AiOutlineSearch } from 'react-icons/ai'

export function DrawerSidebar() {
  return (
    <>
      <S.Container>
        <S.Box>
          <S.InputBox>
            <AiOutlineSearch fill="#88869D" size="1.5rem" />
            <input type="text" />
          </S.InputBox>
          <S.Button>
            Search
          </S.Button>
        </S.Box>
      </S.Container>
    </>
  )
}
