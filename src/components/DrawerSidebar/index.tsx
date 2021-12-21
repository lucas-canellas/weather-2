import * as S from './styles'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

export type DrawerSidebarProps = {
  toogle: () => void
  getWoeid: (location: any) => Promise<void>
}

export function DrawerSidebar({ toogle, getWoeid }: DrawerSidebarProps) {
  const [location, setLocation] = useState('');

  function handleChange(event: { target: { value: any; }; }) {
    setLocation(event.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    getWoeid(location)
    event.preventDefault()
  }
  return (
    <>
      <S.Container>
        <S.CloseIconBox>
          <AiOutlineClose fill="#FFF" size="1.5rem" onClick={() => toogle()} />
        </S.CloseIconBox>
          <form onSubmit={handleSubmit}>
        <S.Box>
            <S.InputBox>
              <AiOutlineSearch fill="#88869D" size="1.5rem" />
              <input type="text" onChange={handleChange} />
            </S.InputBox>
            <S.Button type="submit" value="Enviar">
              Search
            </S.Button>
        </S.Box>
          </form>
      </S.Container>
    </>
  )
}
