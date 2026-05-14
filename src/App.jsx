import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'

function App() {
  const [clicked, setClicked] = useState(false)
  const [showWishes, setShowWishes] = useState(false)

  const handleClick = () => {
    setClicked(true)
    
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFD1DC', '#FFFFFF'],
    })

    // Show wishes after animation
    setTimeout(() => {
      setShowWishes(true)
      // More confetti for celebration
      const duration = 3000
      const end = Date.now() + duration

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFD1DC', '#FFFFFF'],
        })
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFD1DC', '#FFFFFF'],
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }

      frame()
    }, 800)
  }

  return (
    <div className="app">
      {!clicked ? (
        <div className="prompt-screen">
          <div className="prompt-text">
            <h1>I have a surprise for you... 💕</h1>
            <p>Click the circle you see it na that big ahh circle bro click karna aata hai na</p>
          </div>
          <div className="circle-container">
            <div className="circle" onClick={handleClick}>
              <span className="circle-icon">🎁</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="celebration-screen">
          <div className="expanded-circle">
            <div className="birthday-content">
              {showWishes && (
                <>
                  <h1 className="birthday-title">Happy Birthday! 🎉</h1>
                  <p className="birthday-message">
                    To my pretty beautiful girlfriend!! 💕
                  </p>
                  <p className="birthday-subtitle">
                    I love you baby!. You have always been such a good and best person to me. No day goes by without me thinking about you. You always make me feel loved
                    So today ek dam party eh eh hehe.
                  </p>
                  <p className='birthday-subtitle'> 
                    Thank you for always being with me and supporting me in each thing i do. I love you so muchh!
                  </p>
                  <div className="hearts">
                    <span className="heart">💖</span>
                    <span className="heart">💗</span>
                    <span className="heart">💕</span>
                    <span className="heart">💓</span>
                    <span className="heart">💝</span>
                  </div>
                  <div className="image-gallery">
                    <h2 className="gallery-title">Our Moments cutie 👀</h2>
                    <div className="gallery-grid">
                      <img src={image1} alt="Memory 1" className="gallery-image" />
                      <img src={image2} alt="Memory 2" className="gallery-image" />
                      <img src={image3} alt="Memory 3" className="gallery-image" />
                      <img src={image4} alt="Memory 4" className="gallery-image" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
