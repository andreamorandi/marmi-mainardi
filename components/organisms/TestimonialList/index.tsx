import TestimonialCard from 'components/molecules/Card/TestimonialCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const TestimonialList = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          clickableClass: 'swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        direction="horizontal"
        modules={[Pagination]}
        slideClass='swiper-slide'
        slideActiveClass='swiper-slide-active'
        
      >
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/slider2.png"
            name="Eleganza senza tempo per la vostra casa."
            company=""
            testimony={``}
            imageWidth={300}
            imageHeight={300}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/slider3.png"
            name="Diamo vita alle vostre idee."
            company=""
            testimony={``}
            imageWidth={300}
            imageHeight={300}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/slider5.png"
            name="Arte sacra, una preghiera scolpita."
            company=""
            testimony={``}
            imageWidth={300}
            imageHeight={300}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/slider4.png"
            name="Opere che preservano e onorano le vite passate."
            company=""
            testimony={``}
            imageWidth={300}
            imageHeight={300}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/slider1.png"
            name="Stemmi che raccontano storie e tradizioni."
            company=""
            testimony={``}
            imageWidth={300}
            imageHeight={300}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList
