import * as S from './styles'
import { Sidebar } from '../../components/Sidebar'
import { Degree } from '../../components/Degree'
import { CardWeather } from '../../components/CardWeather'
import { WindStatus } from '../../components/WindStatus'
import { Humidity } from '../../components/Humidity'
import { HighlightCard } from '../../components/HighlightCard'
import React, { useState } from 'react'
import api from './../../services/api'
import Drawer from '@mui/material/Drawer';
import { DrawerSidebar } from '../../components/DrawerSidebar'


export function Home1() {

  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState(open);
      };

  return (
    <>
      <S.Container>
        <Sidebar toggleDrawer={toggleDrawer} degree="15" metric="ºC" weather="Shower" dayWeek="Today" date="Fri, 5 jun" city="Helsink" />
        <S.Content>
          <S.ContentContainer>
            <S.DegreeBox>
              <Degree background="#E7E7EB" color="#110E3C">
                ºC
              </Degree>
              <Degree background="#585676" color="#E7E7EB">
                ºF
              </Degree>
            </S.DegreeBox>
            <S.CardWeatherBox>
              <CardWeather title="Tomorrow" max="16ºC" min="12ºC" />
              <CardWeather title="Tomorrow" max="16ºC" min="12ºC" />
              <CardWeather title="Tomorrow" max="16ºC" min="12ºC" />
              <CardWeather title="Tomorrow" max="16ºC" min="12ºC" />
              <CardWeather title="Tomorrow" max="16ºC" min="12ºC" />
            </S.CardWeatherBox>
            <S.TitleBox><h1>Today’s Hightlights </h1></S.TitleBox>
            <S.HightlightsBox>
              <WindStatus speed="7" direction_compass="wsw" />
              <Humidity percent="84" />
              <HighlightCard title="Visibility" value="6,4" metric="miles" />
              <HighlightCard title="Air Pressure" value="998" metric="mb" />
            </S.HightlightsBox>
            <S.FooterBox><p>created by <span>username</span> - devChallenges.io</p></S.FooterBox>
          </S.ContentContainer>
        </S.Content>
      </S.Container>
      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <DrawerSidebar />
      </Drawer>
    </>
  )
}
