import './App.css';
import logo from './imgs/logo.png'
import Button from "./components/Button.js"
import Counter from "./components/Counter.js"
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);

  };
  const restart = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='gaalpos-container'>
        <h1> Click!</h1>
      </div>
      <div className='main-container'>

        <Counter
          clicksNumber={numClicks} />

        <Button
          text="Click"
          isClickButton={true}
          handleClick={handleClick} />
        <Button
          text="Restart"
          isClickButton={false}
          handleClick={restart} />

      </div>
    </div>
  );
}

export default App;
