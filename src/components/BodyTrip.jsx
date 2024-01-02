import TripMap from "./TripMap";
import Weather from "./Weather";
import RecentTrips from "./RecentTrips";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "./slider.css";

function BodyTrip({ tripDetail }) {
  return (
    <>
      <div className="body-trip-page">
        <section className="trip-container">
          <div className="trip-title">
            <div className="trip-title-destination">
              <i class="fa-solid fa-location-dot"></i>
              <h2 className="trip-title-destination-text">{tripDetail.city}</h2>
            </div>
            <div className="trip-title-date">
              <i class="fa-solid fa-plane-departure"></i>
              <h3 className="trip-title-date-text">{tripDetail.checkIn}</h3>
              <i class="fa-solid fa-plane-arrival"></i>
              <h3 className="trip-title-date-text">{tripDetail.checkOut}</h3>
            </div>
          </div>
          <div className="trip-wrapper-1">
            {/*  */}
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              className="trip-slider"
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={true}
            >
              <SwiperSlide className="trip-slide">
                <img
                  className="trip-slide-img"
                  src={tripDetail.slideImg1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="trip-slide">
                <img
                  className="trip-slide-img"
                  src={tripDetail.slideImg2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="trip-slide">
                <img
                  className="trip-slide-img"
                  src={tripDetail.slideImg3}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            {/*  */}
            <div className="trip-info">
              <TripMap key={tripDetail.id} tripData={tripDetail} />
              <Weather key={tripDetail.id} tripData={tripDetail} />
            </div>
          </div>
          <div className="trip-wrapper-2">
            <div className="trip-subtitle">
              <h2>{tripDetail.summaryTitle}</h2>
            </div>
            <div className="trip-summary">
              <div className="trip-summary-highlights">highlights-2</div>
              <div className="trip-summary-description">
                <p className="trip-summary-description-text">
                  {tripDetail.summaryText}
                </p>
              </div>
            </div>
          </div>
        </section>
        <RecentTrips />
      </div>
    </>
  );
}

export default BodyTrip;
