import React from 'react'
import Scheduler from '../../components/scheduler/Scheduler'
import Scheduler2 from '../../components/scheduler/Scheduler2'
import "./Home.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home'>
      <div className='nav-nb'>
        <Navbar />
      </div>
      <div className='h-body'>
        <Sidebar className="side-nb"/>
        <div className='home-content'>
          <div className='left'>
          {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23C0CA33&ctz=Asia%2FKolkata&showCalendars=1&mode=MONTH&src=YWFkaWo0OTQ1QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23C0CA33&ctz=Asia%2FKolkata&showCalendars=1&mode=MONTH&src=YWFkaWo0OTQ1QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" style={{border:"solid 1px #777"}} width="460" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
          <div className='right'>
              <Scheduler2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home