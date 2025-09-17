import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await axios.get("https://devsapihub.com/api-players");
        setData(res.data);
      } catch (error) {
        console.log("Error");
      }
    };
    fetchPlayers();
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center mb-5">Jugadores de basketball</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((player, index) => (
          <div className="h-100 p-2 border-2 border-white bg-gray-700 rounded-xl">
            <div className="text-center text-2xl">{player.name}</div>
            <img src={player.imgSrc} alt={player.name} />
            <div>
              <small>{player.number}</small>
              <p>Position: {player.position}</p>
              <p>Estadisticas: {player.stats}</p>
              <p>Equipo: {player.teamName}</p>
              {player.info}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
