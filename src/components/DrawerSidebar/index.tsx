import * as S from './styles'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';

export type DrawerSidebarProps = {
  toogle: () => void
  getWoeid: (location: any) => Promise<void>
}

type Inputs = {
  location_data: string
};

export function DrawerSidebar({ toogle, getWoeid }: DrawerSidebarProps) {
  const [location, setLocation] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    setLocation(data.location_data)
    if(location != '') {
      getWoeid(location);
    }
  };
  return (
    <>
      <S.Container>
        <S.CloseIconBox>
          <AiOutlineClose fill="#FFF" size="1.5rem" onClick={() => toogle()} />
        </S.CloseIconBox>
        <S.Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.InputBox>
              <AiOutlineSearch fill="#88869D" size="1.5rem" />
              <input type="text" {...register("location_data")} />
            </S.InputBox>
            <S.Button type="submit">
              Search
            </S.Button>
          </form>
        </S.Box>
      </S.Container>
    </>
  )
}
