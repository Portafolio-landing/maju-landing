import "./card-star-product.css";

interface CardProps {
  imagen: string;
  name: string;
  rol: string;
  description: string;
}

export default function Card({ imagen, name, rol, description }: CardProps) {
  return (
    <div className="card">
      <img src={imagen} alt={name} className="card-img" />
      <div className="card-content">
        <div className="title-role">
          <h3 className="title">{name}</h3>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
