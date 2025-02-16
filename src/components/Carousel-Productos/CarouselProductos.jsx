import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarouselProductos.css";

const productos = [
  {
    imagen: "/torta-de-chocalate.JPG",
    name: "Tarta de Chocolate",
    price: "S/ 15.00",
    description: "Deliciosa tarta de chocolate con cobertura de cacao puro y almendras caramelizadas."
  },
  //{
  //  imagen: "/dest2.JPG",
  //  name: "Croissant de Almendra",
  //  price: "S/ 10.50",
  //  description: "Hojaldre crujiente relleno de crema de almendra con un toque de azúcar glas."
  //},
  {
    imagen: "/pastel-de-fresas.JPG",
    name: "Pastel de Fresas",
    price: "S/ 18.00",
    description: "Esponjoso bizcocho de vainilla con fresas frescas y crema batida."
  },
  //{
  //  imagen: "/dest4.JPG",
  //  name: "Macarons Franceses",
  //  price: "S/ 12.00",
  //  description: "Coloridos y crujientes macarons con rellenos de frambuesa, pistacho y chocolate."
  //},
];

export default function CarouselProductos() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="mySwiper"
      >
        {productos.map((producto, index) => (
          <SwiperSlide key={index}>
            <div className="product-slide">
              <img src={producto.imagen} alt={producto.name} className="product-image" />
              <div className="product-info">
                <div className="title-price">
                  <h3 className="title">{producto.name}</h3>
                  <p className="price">{producto.price}</p>
                </div>
                <p className="description">{producto.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
