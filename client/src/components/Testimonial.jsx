import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/testimonial.scss'
const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'John Doe',
      occupation: 'Customer',
      image: 'https://via.placeholder.com/150',
      text: 'Betselot Pharmacy has great service and a wide selection of products. I always find what I need here.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      occupation: 'Customer',
      image: 'https://via.placeholder.com/150',
      text: 'I love Betselot Pharmacy! The staff is friendly and knowledgeable, and the prices are affordable.'
    },
    {
      id: 3,
      name: 'Mark Johnson',
      occupation: 'Doctor',
      image: 'https://via.placeholder.com/150',
      text: 'As a healthcare professional, I recommend Betselot Pharmacy to all of my patients. They have high-quality products and excellent customer service.'
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="testimonials-page">
      <h1>Testimonials</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <h2>{testimonial.name}</h2>
            <h3>{testimonial.occupation}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsPage;
