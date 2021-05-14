import { Container } from 'reactstrap'
import styled from 'styled-components'
import { Button } from '../common'

import bg from '../../assets/images/bgContact.jpg'

const Main = styled.section`
  background-image: url('${bg}');
  background-size: cover;
  background-position: center center;
  text-align: center;
  color: #fff;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  padding: 60px 0px 70px;
  margin: 0px -10px;
  background-color: rgba(20, 80, 210, 0.65);
  box-shadow: inset 0 0px 20px #000;
`
const Title = styled.h3`
  font-weight: bold;
  font-size: 2rem;
`

const ContactUs = () => {
  return (
    <Main>
      <Wrapper>
        <Container>
          <Title>Our Commitment to Professionals</Title>
          <p className='mb-5'>
            We help our partners deliver industry leading results with a
            commitment to excellence, thought-provoking insights and experienced
            distribution. We are laser focused on our shared goal – helping
            clients achieve their objectives. 
          </p>
          <Button>Contact Us</Button>
        </Container>
      </Wrapper>
    </Main>
  )
}

export default ContactUs
