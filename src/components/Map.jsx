import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const map = L.map("map").setView([-11.989842457771704, -77.07162078883616], 30);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Crear marcador
      const marker = L.marker([-11.989842457771704, -77.07162078883616])
        .addTo(map)
        .bindPopup("¡Ven y descúbrenos!🧁")
        .openPopup();

      // Agregar evento click al marcador para redirigir a Google Maps
      marker.on("click", function () {
        window.open("https://www.google.com/maps/place/EUROPOSTRES+MAJU/@-11.9898176,-77.0742235,17z/data=!3m1!4b1!4m6!3m5!1s0x9105ce5ba679629b:0xa934456619a82058!8m2!3d-11.9898176!4d-77.0716432!16s%2Fg%2F11b6vk2k1x?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D", "_blank");
      });

      return () => map.remove();
    }
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%"}}></div>;
};

export default Map;
