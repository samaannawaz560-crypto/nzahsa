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

    </div>
  )
}

export default App
