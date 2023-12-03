import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../App.css';
import bikeImg from './../media/pix/bike.jpg';
import bookImg from './../media/pix/book.jpg';
import campImg from './../media/pix/camp.jpg';
import codeImg from './../media/pix/code.jpg';
import hikeImg from './../media/pix/hike.jpg';
import movieImg from './../media/pix/movie.jpg';
import outdoorImg from './../media/pix/outdoor.jpg';
import paintImg from './../media/pix/paint.jpg';
import pastaImg from './../media/pix/pasta.jpg';
import poolImg from './../media/pix/pool.jpg';
import wineImg from './../media/pix/wine.jpg';

const HeroCarousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={bikeImg} alt="Trail Biking" />
      </div>
      <div>
        <img src={bookImg} alt="Book Club" />
      </div>
      <div>
        <img src={campImg} alt="Singing at Camp" />
      </div>
      <div>
        <img src={codeImg} alt="Project Development Coding" />
      </div>
      <div>
        <img src={hikeImg} alt="Hiking on a Trail" />
      </div>
      <div>
        <img src={movieImg} alt="Watching a movie" />
      </div>
      <div>
        <img src={outdoorImg} alt="Outdoor" />
      </div>
      <div>
        <img src={paintImg} alt="Paiting together and drinking wine" />
      </div>
      <div>
        <img src={pastaImg} alt="Making pasta" />
      </div>
      <div>
        <img src={poolImg} alt="Swimming Pool Party" />
      </div>
      <div>
        <img src={wineImg} alt="Going on a wine tour and celebrate at table" />
      </div>
    </Slider>
  );
};

export default HeroCarousel;
