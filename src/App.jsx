import './index.css'

function App() {
  const games = [
    {
      title: 'Cyber Rush',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e'
    },
    {
      title: 'Neon Battle',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420'
    },
    {
      title: 'Pixel Arena',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8'
    },
    {
      title: 'Sky Legends',
      image:
        'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42'
    }
  ]

  return (
    <div className="app">

      <div className="particles"></div>

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
            Dive into futuristic battles, neon vibes,
            esports energy, and next-level gaming experiences.
          </p>

          <button className="play-btn">
            PLAY NOW
          </button>
        </div>
      </section>

      <section className="games-section">
        <h2>Trending Games</h2>

        <div className="games-grid">

          {games.map((game, index) => (
            <div className="game-card" key={index}>

              <img
                src={game.image}
                alt={game.title}
              />

              <div className="card-content">
                <h3>{game.title}</h3>

                <p>
                  Futuristic multiplayer action packed experience.
                </p>

                <button>Play Game</button>
              </div>

            </div>
          ))}

        </div>
      </section>
<section className="leaderboard-section">

  <h2>Top Players</h2>

  <div className="leaderboard">

    <div className="player-card">
      <h3>#1 ShadowX</h3>
      <p>Rank Score: 9850</p>
    </div>

    <div className="player-card">
      <h3>#2 NeonHunter</h3>
      <p>Rank Score: 9420</p>
    </div>

    <div className="player-card">
      <h3>#3 CyberWolf</h3>
      <p>Rank Score: 9010</p>
    </div>

  </div>

</section>
    </div>
  )
}
<section className="stats-section">

  <div className="stat-box">
    <h1>10M+</h1>
    <p>Players Worldwide</p>
  </div>

  <div className="stat-box">
    <h1>250+</h1>
    <p>Esports Tournaments</p>
  </div>

  <div className="stat-box">
    <h1>99%</h1>
    <p>Pro Gamer Satisfaction</p>
  </div>

</section>
<footer className="footer">

  <h2>NZAHSA</h2>

  <p>
    The future of esports, gaming, and cyber entertainment.
  </p>

  <div className="socials">
    <button>Discord</button>
    <button>YouTube</button>
    <button>Twitch</button>
  </div>

</footer>
  export default App
