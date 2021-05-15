import Carousel from 'react-multi-carousel'
import styled from 'styled-components'
const Main = styled.main`
  margin-right: 10px;

  .react-multi-carousel-dot button {
    border-width: 1px;
  }

  .react-multi-carousel-dot--active button {
    background: gray;
  }
`

export const CustomCarousel = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 746 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 746, min: 0 },
      items: 1.2,
    },
  }
  return (
    <Main>
      <Carousel
        responsive={responsive}
        swipeable
        arrows={false}
        showDots
        dotListClass='d-lg-none'
      >
        {children}
      </Carousel>
    </Main>
  )
}
