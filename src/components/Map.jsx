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

      L.marker([-11.989842457771704, -77.07162078883616]).addTo(map)
        .bindPopup("¡Ven y descúbrenos!🧁")
        .openPopup();

      return () => map.remove();
    }
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%"}}></div>;
};

export default Map;
