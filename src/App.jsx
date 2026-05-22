export default function NZAHSAHomepage() {
  const games = [
    "Cyber Rush",
    "Neon Battle",
    "Pixel Arena",
    "Sky Legends"
  ];

  const players = [
    { name: "ShadowX", score: "9800" },
    { name: "NovaPlay", score: "9200" },
    { name: "StormZ", score: "8700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-cyan-900 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/5 border-b border-cyan-400/20 sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-widest text-cyan-300 drop-shadow-lg">
          NZAHSA
        </h1>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#home" className="hover:text-cyan-300 transition">Home</a>
          <a href="#games" className="hover:text-cyan-300 transition">Games</a>
          <a href="#leaderboard" className="hover:text-cyan-300 transition">Leaderboard</a>
          <a href="#players" className="hover:text-cyan-300 transition">Players</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-28 relative"
      >
        <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>

        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-wide bg-gradient-to-r from-cyan-300 to-purple-300 text-transparent bg-clip-text animate-pulse">
          NZAHSA
        </h2>

        <p className="max-w-2xl text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed">
          Enter the next generation gaming universe with neon vibes,
          trending games, esports energy, and futuristic style.
        </p>

        <button className="px-10 py-4 text-xl rounded-2xl bg-cyan-400 text-black font-bold shadow-2xl hover:scale-110 hover:bg-purple-400 transition duration-300">
          ▶ Play Now
        </button>
      </section>

      {/* Trending Games */}
      <section id="games" className="px-8 py-20">
        <h3 className="text-4xl font-bold mb-10 text-center text-cyan-300">
          Trending Games
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white/10 border border-cyan-400/20 rounded-3xl p-6 backdrop-blur-md hover:scale-105 hover:shadow-cyan-500/30 hover:shadow-2xl transition"
            >
              <div className="h-40 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 mb-5 animate-pulse"></div>
              <h4 className="text-2xl font-bold mb-2">{game}</h4>
              <p className="text-gray-300">
                Futuristic multiplayer action packed experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section id="leaderboard" className="px-8 py-20 bg-black/30 backdrop-blur-lg">
        <h3 className="text-4xl font-bold mb-10 text-center text-purple-300">
          Leaderboard
        </h3>

        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-purple-400/30">
          {players.map((player, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-5 bg-white/5 border-b border-white/10 hover:bg-cyan-400/10 transition"
            >
              <span className="text-xl font-semibold">
                #{index + 1} {player.name}
              </span>
              <span className="text-cyan-300 font-bold text-lg">
                {player.score} pts
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gamer Cards */}
      <section id="players" className="px-8 py-20">
        <h3 className="text-4xl font-bold mb-10 text-center text-cyan-300">
          Gamer Profiles
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {players.map((player, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/10 p-8 border border-cyan-400/20 backdrop-blur-lg hover:scale-105 hover:shadow-purple-500/30 hover:shadow-2xl transition"
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-cyan-300 to-purple-500 mb-6"></div>
              <h4 className="text-2xl font-bold text-center mb-2">
                {player.name}
              </h4>
              <p className="text-center text-gray-300 mb-4">
                Elite NZAHSA Gamer
              </p>
              <div className="text-center text-cyan-300 font-bold text-xl">
                {player.score} XP
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-cyan-400/20 bg-black/40">
        <h4 className="text-3xl font-extrabold tracking-widest text-cyan-300 mb-3">
          NZAHSA
        </h4>
        <p className="text-gray-400">
          © 2026 NZAHSA Gaming Universe. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
