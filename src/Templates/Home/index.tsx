import * as S from './styles'
import { Sidebar } from '../../components/Sidebar'
import { Degree } from '../../components/Degree'
import { CardWeather } from '../../components/CardWeather'
import { WindStatus } from '../../components/WindStatus'
import { Humidity } from '../../components/Humidity'
import { HighlightCard } from '../../components/HighlightCard'
import React, { useEffect, useState } from 'react'
import api from './../../services/api'

export function Home1() {

  const [woeid, setWoeid] = useState(44418)
  const [data, setData] = useState()


  async function getWoeid() {
    try {
      await api.get('location/search/?query=london')
        .then(response => setWoeid(response.data[0].woeid)
        )
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    api.get(`/api/location/${woeid}/`)
      .then(response => setData(response.data),
      )
  }, [woeid])

  return (
    <>
      {
        data ?
          <S.Container>
            <Sidebar degree="15" metric="ºC" weather="Shower" dayWeek="Today" date="Fri, 5 jun" city={data['title']} />
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
          :
          ''
      }
    </>
  )
}
