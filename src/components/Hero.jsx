import { Link } from "wouter";
import { useState, useEffect } from "react";
import getTripList from "../services/getTripList";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "./slider.css";

function Hero() {
  const [hero, setHero] = useState([]);

  useEffect(function () {
    (async function () {
      const result = await getTripList.getTripList();

      setHero(result);
    })();
  }, []);

  return (
    <>
      <section className="hero-container">
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          className="hero-slider"
          slidesPerView={1}
          // pagination={{ clickable: true }}
          // navigation
          autoplay={true}
        >
          <SwiperSlide className="hero-slide">
            <Link href={"/trip/" + "New York"}>
              <h1 className="hero-title">
                <span className="hero-title-caps">N</span>ew York
                <i class="fa-solid fa-chevron-right arrow-1"></i>
                <i class="fa-solid fa-chevron-right arrow-2"></i>
                <i class="fa-solid fa-chevron-right arrow-3"></i>
              </h1>

              <img
                src="/images/new-york/new-york1.jpg"
                alt="New York hero image"
                className="hero-img"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hero-slide">
            <Link href={"/trip/" + "Seoul"}>
              <h1 className="hero-title">
                <span className="hero-title-caps">S</span>eoul
                <i class="fa-solid fa-chevron-right arrow-1"></i>
                <i class="fa-solid fa-chevron-right arrow-2"></i>
                <i class="fa-solid fa-chevron-right arrow-3"></i>
              </h1>
              <img
                src="/images/seoul/seoul1.jpg"
                alt="Seoul hero image"
                className="hero-img"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="hero-slide">
            <Link href={"/trip/" + "Rome"}>
              <h1 className="hero-title">
                <span className="hero-title-caps">R</span>ome
                <i class="fa-solid fa-chevron-right arrow-1"></i>
                <i class="fa-solid fa-chevron-right arrow-2"></i>
                <i class="fa-solid fa-chevron-right arrow-3"></i>
              </h1>
              <img
                src="/images/rome/rome1.jpg"
                alt="Rome hero image"
                className="hero-img"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
