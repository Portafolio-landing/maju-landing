import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarouselProductos.css";

const productos = [
  {
    imagen: "/la_irlandesa.JPG",
    name: "Torta Irlandesa (Premium)",
    price: "S/ 15.00",
    description: "Queque de chocolate con café alemán y whisky Johnnie Walker etiqueta roja."
  },
  {
    imagen: "/torta_hindu.JPG",
    name: "Torta Indú (Hindú) (Premium)",
    price: "S/ 10.50",
    description: "Torta de zanahoria con pecanas y manjar blanco."
  },
  {
    imagen: "/tres_leches_de_vainilla.JPG",
    name: "Torta Tres Leches (Chocolate)",
    price: "S/ 18.00",
    description: "Bizcocho en tres leches, versión chocolate."
  },
  {
    imagen: "/torta_de_almendra.JPG",
    name: "Torta de Almendras (Premium)",
    price: "S/ 12.00",
    description: "Queque de vainilla con almendras tostadas y manjar blanco."
  },
  {
    imagen: "/torta_de_platano.JPG",
    name: "Torta de Plátano",
    price: "S/ 12.00",
    description: "Queque de plátano con choco chips y Chantilly."
  },
  {
    imagen: "/pie_de_limon.JPG",
    name: "Torta Francesa de Limón",
    price: "S/ 12.00",
    description: "Cheesecake con queso Philadelphia y limón."
  },
  {
    imagen: "/chocolate_humedo_torta_chocolate.JPG",
    name: "Torta de Chocolate Húmedo",
    price: "S/ 12.00",
    description: "Queque de chocolate con fudge puro y capas de fudge."
  },
  {
    imagen: "/delicia_de_pera.JPG",
    name: "Delicia de Pera",
    price: "S/ 12.00",
    description: "Queque denso de vainilla con crema pastelera y peras."
  },
  {
    imagen: "/cheesecake_fresa.JPG",
    name: "Maggie’s Cheese Cake (Premium)",
    price: "S/ 12.00",
    description: "Cheesecake elaborado con quark, queso Philadelphia y base de galleta de vainilla."
  },
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
