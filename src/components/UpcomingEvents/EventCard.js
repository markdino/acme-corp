import styled from 'styled-components'
import { Button } from '../common'

const CardBody = styled.section`
  padding: 0px 15px 0px;
  position: relative;
  margin: 40px 10px 20px;
  max-width: 380px;
  background-color: #1450d2;
  color: #fff;
`
const Calendar = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  text-align: center;
  background-color: #001254;
  margin: -14px 0px 20px 5px;
  padding: 10px 0px;
  z-index: 1000;
`
const CalendarTail = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 15px solid #3c4e96;
    border-left: 15px solid transparent;
    width: 0;
    margin-left: -14px;
  }
`
const CardContent = styled.section`
  padding: 70px 0px 40px 4px;
`
const EventMonth = styled.h5`
  text-transform: uppercase;
  font-weight: 200;
  font-size: 0.9rem;
  margin: 0px;
`
const EventDate = styled.h5`
  font-weight: bold;
  font-size: 2rem;
  margin: 0px;
`
const CardTitle = styled.h4`
  font-weight: bold;
  font-size: 1.3rem;
  color: #fff;
  margin: 0px;
`
const CardText = styled.p`
  font-weight: 200;
  font-size: 0.8rem;
  height: 38.5px;
`
const CardFooter = styled.section`
  position: relative;
  background-color: #ebebeb;
  height: 40px;
  margin: 0px -15px 0px 5px;
  color: #000;
`
const FooterCorner = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 40px solid #ebebeb;
    border-left: 40px solid #1450d2;
    width: 0;
  }
`
const FooterText = styled.p.attrs({
  className: 'text-truncate text-end text-uppercase fw-bold',
})`
  padding: 10px 20px 10px 40px;
  font-size: 0.9rem;
  margin: 0px;
`

const EventCard = ({ title, text, calendar, address }) => {
  return (
    <CardBody>
      <Calendar>
        <CalendarTail />
        <EventMonth>{calendar.month}</EventMonth>
        <EventDate>{calendar.date}</EventDate>
      </Calendar>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <Button>Get More Insight</Button>
      </CardContent>
      <CardFooter>
        <FooterCorner />
        <FooterText>{address}</FooterText>
      </CardFooter>
    </CardBody>
  )
}

export default EventCard
