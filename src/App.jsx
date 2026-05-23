import './index.css'

function App() {

  const games = [
    {
      title: 'FREE FIRE',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e'
    },
    {
      title: 'PUBG MOBILE',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420'
    },
    {
      title: 'CALL OF DUTY',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8'
    }
  ]

  return (
    <div className="app">

      <div className="particles"></div>

      <nav className="navbar">

        <h1 className="logo">
          NZAHSA
        </h1>

        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">GAMES</a>
          <a href="#">TOURNAMENTS</a>
          <a href="#">LEADERBOARD</a>
        </div>

      </nav>

      <section className="hero">

        <div className="hero-left">

          <p className="tag">
            NEXT GEN GAMING
          </p>

          <h1>
            ENTER THE <span>FUTURE</span>
          </h1>

          <p className="desc">
            Dive into futuristic battles,
            neon vibes, esports energy,
            and next-level gaming experiences.
          </p>

          <div className="hero-buttons">

            <button className="play-btn">
              PLAY NOW
            </button>

            <button className="secondary-btn">
              BROWSE GAMES
            </button>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200"
            alt="gaming"
          />

        </div>

      </section>

      <section className="games-section">

        <h2>FEATURED GAMES</h2>

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
                  Futuristic multiplayer
                  action packed experience.
                </p>

                <button>
                  PLAY GAME
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-box">
          <h1>25K+</h1>
          <p>PLAYERS</p>
        </div>

        <div className="stat-box">
          <h1>500+</h1>
          <p>TOURNAMENTS</p>
        </div>

        <div className="stat-box">
          <h1>$10K+</h1>
          <p>PRIZE POOL</p>
        </div>

      </section>

      <footer className="footer">

        <h2>NZAHSA ESPORTS</h2>

        <p>
          The future of esports,
          gaming and cyber entertainment.
        </p>

      </footer>

    </div>
  )
}

export default App
