import Carousel from 'react-multi-carousel'

export const CustomCarousel = ({ children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 746 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 746, min: 0 },
      items: 1,
    },
  }
  return (
    <Carousel
      responsive={responsive}
      swipeable
      arrows={false}
      partialVisible
      showDots
      dotListClass='d-lg-none'
    >
      {children}
    </Carousel>
  )
}
