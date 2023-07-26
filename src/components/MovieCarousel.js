import { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const MovieCarousel = ({ movies }) => {
  const [modalMovie, setModalMovie] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleMovieClick = (movie) => {
    setModalMovie(movie);
  };

  const handleCloseModal = () => {
    setModalMovie(null);
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className={`arrow next ${currentSlide === movies.length - 1 ? 'hidden' : ''}`} style={{ right: "10px", position: "absolute", top: "50%", zIndex: 1 }} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-red-600 hover:text-red-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`arrow prev ${currentSlide === 0 ? 'hidden' : ''}`} style={{ left: "10px", position: "absolute", top: "50%", zIndex: 1 }} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-red-600 hover:text-red-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    afterChange: current => setCurrentSlide(current),
  };

  return (
    <div className="relative overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            onClick={() => handleMovieClick(movie)} 
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
      {modalMovie && <MovieModal movie={modalMovie} onClose={handleCloseModal} />}
    </div>
  );
};

export default MovieCarousel;
