import * as S from './styles'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export type DrawerSidebarProps = {
  toogle: () => void
}

export function DrawerSidebar({ toogle}: DrawerSidebarProps) {
  return (
    <>
      <S.Container>
        <S.CloseIconBox>
          <AiOutlineClose fill="#FFF" size="1.5rem" onClick={() => toogle()} />
        </S.CloseIconBox>
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
