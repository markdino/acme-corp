import styled from 'styled-components'

const CardBody = styled.section`
  padding: 25px 15px 15px;
  border-bottom: 8px solid ${(props) => props.color};
  position: relative;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.3);
  margin: 10px 10px 20px;
  max-width: 380px;
  background-color: #fff;
`
const ImgWrapper = styled.div`
  position: relative;
`
const CardImg = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  object-position: center center;
  margin-bottom: 10px;
`
const CardTitle = styled.h4`
  font-weight: bold;
  font-size: 1.8rem;
  color: ${(props) => props.color};
  margin: 0px;
  max-width: 250px;
  min-height: 70px;
`
const TopLeftCorner = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 80px solid white;
    border-right: 80px solid transparent;
    width: 0;
  }
`
const BottomRightCorner = styled.div`
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 80px solid white;
    border-left: 80px solid transparent;
    width: 0;
  }
`

const InsightCard = ({ color = '#1450d2', img, title }) => {
  return (
    <CardBody color={color}>
      {img && (
        <ImgWrapper>
          <CardImg src={img} />
          <TopLeftCorner />
          <BottomRightCorner />
        </ImgWrapper>
      )}
      <CardTitle color={color}>{title}</CardTitle>
    </CardBody>
  )
}

export default InsightCard
