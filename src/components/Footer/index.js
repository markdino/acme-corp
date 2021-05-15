import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'

import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Envelope } from '../../assets/svg/envelope.svg'

const Main = styled.footer`
  padding: 20px 0px 40px;
  background-color: #707070;
  font-size: 0.7rem;
`
const FooterText = styled.p`
  margin: 0px;
  color: #fff;
`
const SocialShare = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #c6c6c6;
  text-align: right;
`
const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``
const IconWrapper = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c6c6c6;
  margin-left: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
    fill: #707070;
  }

  &:hover {
    background-color: #fff;
  }
`
const Footer = () => {
  return (
    <Main>
      <Container>
        <Row noGutters className='justify-content-between'>
          <Col>
            <FooterText className='m-0'>Call us at 111-222-3333</FooterText>
            <FooterText className='m-0'>for more information </FooterText>
          </Col>
          <Col>
            <SocialShare>
              Social Share
              <SocialLink href='#'>
                <IconWrapper>
                  <Twitter />
                </IconWrapper>
              </SocialLink>
              <SocialLink href='#'>
                <IconWrapper>
                  <Facebook />
                </IconWrapper>
              </SocialLink>
              <SocialLink href='#'>
                <IconWrapper>
                  <Linkedin />
                </IconWrapper>
              </SocialLink>
              <SocialLink href='#'>
                <IconWrapper>
                  <Envelope />
                </IconWrapper>
              </SocialLink>
            </SocialShare>
          </Col>
        </Row>
      </Container>
    </Main>
  )
}

export default Footer
