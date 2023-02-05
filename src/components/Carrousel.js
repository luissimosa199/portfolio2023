import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
// import 'pure-react-carousel/dist/react-carousel.es.css';

function Carrousel({ imgData }) {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={50}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <img src={imgData[0]} alt="First slide" />
        </Slide>
        <Slide index={1}>
          <img src={imgData[2]} alt="Second slide" />
        </Slide>
        <Slide index={2}>
          <img src={imgData[3]} alt="Third slide" />
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}

export default Carrousel;
