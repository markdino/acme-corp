import { Container, Row } from 'reactstrap'
import styled from 'styled-components'
import { CustomCarousel, SectionTitle, SmallText } from '../common'
import EventCard from './EventCard'

const Main = styled.section`
  background-color: #ebebeb;
  padding: 30px 0px;
`

const UpcomingEvents = () => {
  return (
    <Main>
      <Container>
        <SectionTitle>Upcoming Events</SectionTitle>
        <SmallText>
          This needs a great tagline, but I’ll fill it in later
        </SmallText>
        <Row>
          <CustomCarousel>
            <EventCard
              title='Insight Exchange Network'
              calendar={{ date: '28', month: 'Jan' }}
              text='Join us for this conference showcasing innovation.'
              address='Chicago, IL'
            />
            <EventCard
              title='Citywide Buyer’s Retreat'
              calendar={{ date: '12', month: 'Feb' }}
              text='Find out how banks are responding to the changing future of interest...'
              address='The Wagner, New York '
            />
            <EventCard
              title='Research Exchange'
              calendar={{ date: '6', month: 'May' }}
              text='Find the best online resources to help with your investments...'
              address='London, England'
            />
          </CustomCarousel>
        </Row>
      </Container>
    </Main>
  )
}

export default UpcomingEvents
