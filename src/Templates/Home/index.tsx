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
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState<number>(-22.7430026);
  const [lng, setLng] = useState<number>(-42.8503287);
  const [status, setStatus] = useState('');

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus('');
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  async function getNameLocation() {
    try {

      const response = await api.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=03ecc53f4b264de7ab6a16f681648e40`)
      const result = await api.get(`location/search/?query=${response.data.results[0].state}`)
      setWoeid(result.data[0].woeid);
    } catch (err) {
      console.log(err);
    }
  }

  async function getWoeid(location: any) {
    try {
      await api.get(`location/search/?query=${location}`)
        .then(response => setWoeid(response.data[0].woeid)
        )
    } catch (err) {
      console.log(err);
    }
  }

  function celsius2Fahrenheit() {

    setMetric('ºF')
  }

  function Fahrenheit2Celsius() {

    setMetric('ºC')

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
            <Sidebar getNameLocation={getNameLocation} location={location} setLocation={setLocation} getLocation={getLocation} getWoeid={getWoeid} degree={metric === 'ºC' ? Math.trunc(data['consolidated_weather'][0].the_temp).toString() : ((Math.trunc(data['consolidated_weather'][0].the_temp) * 9 / 5) + 32).toString() } metric={metric} weather={data['consolidated_weather'][0].weather_state_name} dayWeek="Today" date={data['consolidated_weather'][0].applicable_date} city={data['title']} img={data['consolidated_weather'][0].weather_state_abbr} />
            <S.Content>
              <S.ContentContainer>
                <S.DegreeBox>
                  <div onClick={Fahrenheit2Celsius}>
                    <Degree background="#E7E7EB" color="#110E3C"  >
                      ºC
                    </Degree>
                  </div>
                  <div onClick={celsius2Fahrenheit}>
                    <Degree background="#585676" color="#E7E7EB">
                      ºF
                    </Degree>
                  </div>
                </S.DegreeBox>
                <S.CardWeatherBox>
                  {/* metric === 'ºC' ? Math.round(weather.max_temp) : ((Math.round(weather.max_temp)) * 9 / 5) + 32).toString() */}
                  {data.consolidated_weather.slice(1, 6).map((weather: any) =>
                    <CardWeather key={weather.id} title={format(new Date(weather.applicable_date), 'ddd, D MMM')} max={metric === 'ºC' ? Math.round(weather.max_temp).toString() : (((Math.round(weather.max_temp)) * 9 / 5) + 32).toString()} min={metric === 'ºC' ? Math.round(weather.min_temp).toString() : (((Math.round(weather.min_temp)) * 9 / 5) + 32).toString()} img={weather.weather_state_abbr} metric={metric} />
                  )}
                </S.CardWeatherBox>
                <S.TitleBox><h1>Today’s Hightlights </h1></S.TitleBox>
                <S.HightlightsBox>
                  <WindStatus wind_direction={(data['consolidated_weather'][0].wind_direction)} speed={Math.trunc(data['consolidated_weather'][0].wind_speed).toString()} direction_compass={(data['consolidated_weather'][0].wind_direction_compass)} />
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
