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
  getLocation: () => void
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
  getNameLocation: () => Promise<void>

}

export function Sidebar({ getNameLocation, location, setLocation,getLocation, city, metric, date, degree, weather, img, getWoeid }: SidebarProps) {
  const [open, setOpen] = useState(true)


  function toogle() {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  async function execAll() {
    getLocation()
    console.log(location)

    await getNameLocation()
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
                <BiCurrentLocation fill="#E7E7EB" size="22px" onClick={execAll} />
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
          <DrawerSidebar location={location} setLocation={setLocation} toogle={toogle} getWoeid={getWoeid} />
        }
      </S.Container>
    </>
  )
}
