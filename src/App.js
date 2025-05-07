import './App.css';
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message

  if (isLoggedIn) {
    message = <h1>Bem vindo de volta!</h1>
  } else {
    message = <h1>Por favor, faça login!</h1>
  }

  function Logar() {
    setIsLoggedIn(true)
    return (
      <div><h1>Bem vindo a página inicial</h1></div>
    )
  }

  function Deslogar() {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <div className='container'>
        {message}
        {isLoggedIn ? <button onClick={Deslogar} >Deslogar</button> : <button onClick={Logar}>Logar</button>
        }
      </div>

    </div>
  );
}

export default App;
