import {CardWeather} from '../components/CardWeather'
import { Degree } from '../components/Degree'
import { HighlightCard } from '../components/HighlightCard'
import { Humidity } from '../components/Humidity'
import { Sidebar } from '../components/Sidebar'
import { WindStatus } from '../components/WindStatus'

const Home = () => {
  return (
    <>
     {/* <CardWeather title="Tomorrow" max="16ºC" min="12ºC"/>
      <Degree background="#E7E7EB" color="#110E3C">
      ºC
    </Degree>
      <Degree background="#585676" color="#E7E7EB">
        ºF
      </Degree>
      <WindStatus speed="7" direction_compass="wsw"/>

      <Humidity percent="84"/>
      <HighlightCard title="Visibility" value="6,4" metric="miles"/>*/}
      <Sidebar degree="15" metric="ºC" weather="Shower" dayWeek="Today" date="Fri, 5 jun" city="Helsink" />


    </>
  )
}

export default Home
