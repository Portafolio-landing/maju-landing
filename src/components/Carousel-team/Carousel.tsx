import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Card from "../Card-team/Card-team";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

const founders = [
  {
    imagen: "/prueba.jpg",
    name: "Luisa Ramirez",
    rol: "Chef principal",
    description: "Primer fundador de la empresa Maju",
  },
  {
    imagen: "/prueba.jpg",
    name: "Carlos Perez",
    rol: "Chef pastelero",
    description: "Experto en repostería artesanal",
  },
  {
    imagen: "/prueba.jpg",
    name: "Andrea López",
    rol: "Barista",
    description: "Apasionada por el arte del café",
  },
  {
    imagen: "/prueba.jpg",
    name: "Pedro Martinez",
    rol: "Gerente",
    description: "Encargado de la administración",
  },
];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {founders.map((founder, index) => (
          <SwiperSlide key={index}>
            <Card {...founder} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
