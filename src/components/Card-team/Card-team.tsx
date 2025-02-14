import "./Card-team.css";

interface CardProps {
  imagen: string;
  name: string;
  rol: string;
  description: string;
}

export default function Card({ imagen, name, rol, description }: CardProps) {
  return (
    <div className="card">
      <img src={imagen} alt={name} className="profile-img" />
      <h3>{name}</h3>
      <h4>{rol}</h4>
      <p>{description}</p>
    </div>
  );
}
