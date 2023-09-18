import { useState, useEffect } from 'react'

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 5 * 60; // 5 minutes

function App() {
  const [secondsAmmount, setSecondsAmmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

  useEffect(() => {
    setTimeout(() => {
      if (secondsAmmount > 0) {
        setSecondsAmmount(state => state - 1);
      } else {
        alert('Chegou ao fim!');
      }
    }, 1000)
  }, [secondsAmmount]);

  const minutes = Math.floor(secondsAmmount / 60);
  const seconds = secondsAmmount % 60;

  return (
    <div>
      <span>{ String(minutes).padStart(2, "0") }</span>
      <span>:</span>
      <span>{ String(seconds).padStart(2, "0") }</span>
    </div>
  )
}

export default App
