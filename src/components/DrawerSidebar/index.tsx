import * as S from './styles'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

export type DrawerSidebarProps = {
  toogle: () => void
  getWoeid: (location: any) => Promise<void>
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

export function DrawerSidebar({ toogle, getWoeid, location, setLocation }: DrawerSidebarProps) {

  function handleChange(event: { target: { value: any; }; }) {
    setLocation(event.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()
    getWoeid(location)
    toogle();
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
