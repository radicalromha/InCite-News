import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out;
`;

const ImageCarousel = styled(Slider)`
  margin-bottom: 20px;
  max-width: 800px; // Adjust the max-width as needed
  .slick-slide > div {
    padding: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  animation: ${slideIn} 0.5s ease-out;
`;

const CarouselImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ImageCarouselComponent = ({ images, settings }) => {
  return (
    <CarouselContainer>
      <ImageCarousel {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <CarouselImage src={image.src} alt={image.alt} />
          </div>
        ))}
      </ImageCarousel>
    </CarouselContainer>
  );
};

export default ImageCarouselComponent;
