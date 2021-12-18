import {CardWeather} from '../components/CardWeather'
import { Degree } from '../components/Degree'
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
      </Degree> */}
      <WindStatus speed="7" direction_compass="wsw"/>
    </>
  )
}

export default Home
