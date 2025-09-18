import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await axios.get("https://devsapihub.com/api-players");
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.log("Error");
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-yellow-400 border-b-transparent rounded-full animate-spin animate-reverse mx-auto"></div>
          </div>
          <p className="text-white text-xl font-bold animate-pulse">
            Cargando jugadores...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-8">
      {/* Header con animación */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 animate-pulse">
          NBA STARS
        </h1>
        {/* Línea decorativa */}
        <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full"></div>

        {/* Subtítulo */}
        <p className="mt-6 text-xl md:text-2xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Los mejores jugadores de la liga
          </span>
        </p>
      </div>

      {/* Grid de jugadores */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-7xl mx-auto">
        {data.map((player, index) => (
          <div
            key={player.id}
            className="group relative transform hover:scale-105 transition-all duration-500 hover:z-10"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Efecto de brillo en hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur animate-pulse"></div>

            {/* Card principal */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-2xl border border-gray-700 hover:border-transparent shadow-2xl">
              {/* Número del jugador */}
              <div className="absolute top-4 right-4 text-6xl font-black text-white/10 group-hover:text-orange-400/20 transition-colors duration-300">
                {player.number}
              </div>

              {/* Imagen del jugador */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={player.imgSrc}
                  alt={player.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badge del número */}
                <div></div>
              </div>

              {/* Información del jugador */}
              <div className="space-y-3">
                {/* Nombre */}
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-300">
                  {player.name}
                </h3>

                {/* Posición */}
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {player.position}
                </div>

                {/* Estadísticas */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700 group-hover:border-orange-500/50 transition-colors duration-300">
                  <p className="text-gray-300 text-sm mb-1 font-medium">
                    📊 Estadísticas
                  </p>
                  <p className="text-white font-bold">{player.stats}</p>
                </div>

                {/* Equipo */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700 group-hover:border-purple-500/50 transition-colors duration-300">
                  <p className="text-gray-300 text-sm mb-1 font-medium">
                    🏟️ Equipo
                  </p>
                  <p className="text-white font-bold">{player.teamName}</p>
                </div>

                {/* Logros */}
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm p-3 rounded-lg border border-yellow-600/30">
                  <p className="text-yellow-300 text-sm mb-1 font-medium">
                    🏆 Logros
                  </p>
                  <p className="text-yellow-100 font-bold text-sm">
                    {player.info}
                  </p>
                </div>
              </div>

              {/* Efecto de partículas en hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-200"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping animation-delay-400"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer decorativo */}
      <div className="text-center mt-16 mb-8">
        <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <p className="text-gray-400 mt-4 text-sm">
          NBA Basketball Players Collection
        </p>
      </div>
    </div>
  );
}

export default App;
