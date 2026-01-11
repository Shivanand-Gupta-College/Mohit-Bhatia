import './App.css'
import Header from './components/Header'
import CountdownTimer from './components/CountdownTimer'
import CTAButton from './components/CTAButton'
import Disclaimer from './components/Disclaimer'


function App() {

  return (
    <>
      <div className="clone-root overflow-hidden p-5">
        <div className="content-container">
          <Header />
          <main className="content">
            <CountdownTimer initial={120} onFinish={() => setPulse(true)} />
            <p style={{ fontWeight: 'bolder' }}>Seconds Left</p>
            <CTAButton />
            <Disclaimer />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
