import React from "react";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
        <img src={Hero} alt="" />
        <div className={classes.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>
      <div className={classes.reviews}>Reviews</div>
      <div className={classes.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={classes.tCarousel}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={classes.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
