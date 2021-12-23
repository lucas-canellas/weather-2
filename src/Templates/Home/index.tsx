import * as S from './styles'
import { Sidebar } from '../../components/Sidebar'
import { Degree } from '../../components/Degree'
import { CardWeather } from '../../components/CardWeather'
import { WindStatus } from '../../components/WindStatus'
import { Humidity } from '../../components/Humidity'
import { HighlightCard } from '../../components/HighlightCard'
import React, { useEffect, useState } from 'react'
import api from './../../services/api'
import { format } from 'fecha'


export function Home1() {

  const [woeid, setWoeid] = useState(44418)
  const [data, setData] = useState<any>()
  const [metric, setMetric] = useState('ºC')


  async function getWoeid(location: any) {
    try {
      await api.get(`location/search/?query=${location}`)
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
            <Sidebar getWoeid={getWoeid} degree={Math.trunc(data['consolidated_weather'][0].the_temp).toString()} metric={metric} weather={data['consolidated_weather'][0].weather_state_name} dayWeek="Today" date={data['consolidated_weather'][0].applicable_date} city={data['title']} img={data['consolidated_weather'][0].weather_state_abbr} />
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
                  {data.consolidated_weather.slice(1, 6).map((weather: any) =>
                    <CardWeather key={weather.id} title={format(new Date(weather.applicable_date), 'ddd, D MMM')} max={`${Math.round(weather.max_temp)}ºC`} min={`${Math.round(weather.min_temp)}ºC`} img={weather.weather_state_abbr} />
                  )}
                </S.CardWeatherBox>
                <S.TitleBox><h1>Today’s Hightlights </h1></S.TitleBox>
                <S.HightlightsBox>
                  <WindStatus speed={Math.trunc(data['consolidated_weather'][0].wind_speed).toString()} direction_compass={(data['consolidated_weather'][0].wind_direction_compass)} />
                  <Humidity percent={Math.trunc(data['consolidated_weather'][0].humidity).toString()} />
                  <HighlightCard title="Visibility" value={Math.trunc(data['consolidated_weather'][0].visibility).toString()} metric="miles" />
                  <HighlightCard title="Air Pressure" value={Math.trunc(data['consolidated_weather'][0].air_pressure).toString()} metric="mb" />
                </S.HightlightsBox>
                <S.FooterBox><p>created by <span>lucas-canellas</span> - devChallenges.io</p></S.FooterBox>
              </S.ContentContainer>
            </S.Content>
          </S.Container>
          :
          ''
      }
    </>
  )
}
