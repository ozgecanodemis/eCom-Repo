// Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Carousel = () => {
    return (
        <div className="mx-auto w-[414px] sm:w-full lg:w-auto m-8">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
            >
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center flex-col p-4"
                        style={{ backgroundImage: "url('https://picsum.photos/1440/300')" }}
                    >
                        <h2 className='text-textColorWhite font-bold'>GROCERIES DELIVERY</h2>
                        <p className='text-textColorWhite '>We know how large objects will act, but things on a
                            small scale just do not act that way.</p>
                        <button className="btn-primary mt-4">Start Now</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://picsum.photos/1440/303" }}
                    ></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://picsum.photos/1440/305')" }}
                    ></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
