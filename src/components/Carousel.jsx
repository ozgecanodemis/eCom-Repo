// Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Carousel = () => {
    return (
        <div className="mx-auto w-[414px] sm:w-full lg:w-[1440px]">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            >
                <SwiperSlide>
                    <button className="btn-primary mt-4">Start Now</button>
                    <img
                        src="/images/slide1.jpg"
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/slide2.jpg"
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/slide3.jpg"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Carousel;
