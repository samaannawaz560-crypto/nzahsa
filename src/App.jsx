import './index.css'

function App() {
  const games = [
    'Cyber Rush',
    'Neon Battle',
    'Pixel Arena',
    'Sky Legends'
  ]

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">NZAHSA</h1>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Games</a>
          <a href="#">Leaderboard</a>
          <a href="#">Players</a>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="tag">NEXT GEN GAMING</p>

          <h1>
            ENTER THE <span>FUTURE</span>
          </h1>

          <p className="desc">
            Dive into futuristic battles, neon vibes, esports energy,
            and next-level gaming experiences.
          </p>

          <button className="play-btn">PLAY NOW</button>
        </div>
      </section>

      <section className="games-section">
        <h2>Trending Games</h2>

        <div className="games-grid">
          {games.map((game, index) => (
            <div className="game-card" key={index}>
              <div className="card-glow"></div>
              <h3>{game}</h3>
              <p>Futuristic multiplayer action packed experience.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
