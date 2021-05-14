import { Container } from 'reactstrap'
import styled from 'styled-components'

import bg from '../../assets/images/bgHero.jpg'

const Banner = styled.section`
  background-image: url('${bg}');
  background-size: cover;
  background-position: left center;
`
const Wrapper = styled.div`
  padding: 70px 10px 100px;
  background-image: linear-gradient(
    120deg,
    rgba(40, 116, 183, 1),
    rgba(40, 116, 183, 0.8),
    transparent,
    transparent
  );
`
const Caption = styled.h4`
  font-size: 2rem;
  color: #fff;
  max-width: 400px;
  font-weight: bold;
`
const LightText = styled.h4`
  font-size: 1.5rem;
  font-weight: 200 !important;
`

const Hero = () => {
  return (
    <Banner>
      <Wrapper>
        <Container>
          <Caption>ACME Wealth Management Platforms</Caption>
          <LightText as={Caption}>
            Investment excellence. <br />
            Diversity of thought. <br />
            Organizational strength. <br />
          </LightText>
        </Container>
      </Wrapper>
    </Banner>
  )
}

export default Hero
