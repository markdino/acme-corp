import { Container, Row } from 'reactstrap'
import styled from 'styled-components'
import InsightCard from './InsightCard'
import { CustomCarousel, SectionTitle, SmallText } from '../common'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'

const Main = styled.section`
  background-color: #ebebeb;
  padding: 30px 0px;
`

const Insights = () => {
  return (
    <Main>
      <Container>
        <SectionTitle>ACME Insights</SectionTitle>
        <SmallText>How are factors being used around the world?</SmallText>
        <Row>
          <CustomCarousel>
            <InsightCard
              title='Global Factor Investing Study'
              img={img1}
              color='#1450d2'
            />
            <InsightCard title='2019  Outlook' img={img2} color='#01a49c' />
            <InsightCard
              title='Capital Market Assumptions'
              img={img3}
              color='#009bfa'
            />
          </CustomCarousel>
        </Row>
      </Container>
    </Main>
  )
}

export default Insights
