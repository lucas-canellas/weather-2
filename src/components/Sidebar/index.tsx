import * as S from './styles'
import { BiCurrentLocation } from 'react-icons/bi'
import { MdLocationPin } from 'react-icons/md'
import Image from 'next/dist/client/image'
import { useState } from 'react'
import { DrawerSidebar } from '../DrawerSidebar'
import { format } from 'fecha';

export type SidebarProps = {
  degree: string;
  metric: string;
  weather: string;
  dayWeek: string;
  date: string;
  city: string;
  img: string;
  getWoeid: (location: any) => Promise<void>
}

export function Sidebar({ city, metric, date, dayWeek, degree, weather, img, getWoeid }: SidebarProps) {
  const [open, setOpen] = useState(true)

  function toogle() {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }
  return (
    <>

      <S.Container>
        {open == true ? (
          <>
            <S.Heading>
              <S.ButtonSearch onClick={() => toogle()}>
                <p>Seach for places</p>
              </S.ButtonSearch>
              <S.ButtonLocation>
                <BiCurrentLocation fill="#E7E7EB" size="22px" />
              </S.ButtonLocation>
            </S.Heading>
            <S.Hero>
              <Image src={require(`./../../../public/img/${img}.png`).default} alt="Picture of the author" />
            </S.Hero>

            <S.DataContainer>
              <S.Degree>{degree}<span>{metric}</span></S.Degree>
              <S.WeatherState>{weather}</S.WeatherState>
              <S.Date>Today{format(new Date(date), ' • ddd, D MMM')}</S.Date>
              <S.ContainerDateCity>
                <MdLocationPin fill="#88869D" size="1.5rem" />
                <S.City>{city}</S.City>
              </S.ContainerDateCity>
            </S.DataContainer>
          </>
        ) :
          <DrawerSidebar toogle={toogle} getWoeid={getWoeid} />
        }
      </S.Container>
    </>
  )
}
