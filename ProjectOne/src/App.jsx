import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Gatito</h1>

        {/* Adicionado o key={count} aqui para a animação reiniciar a cada clique */}
        <img
          key={count}
          src={heroImg}
          className="animacao-clique"
          width="170"
          height="179"
          alt=""
        />

        <div></div>

        <button
          type="button"
          className="counter"
          onClick={() => {setCount((count) => count + 1)
          if(count == 10){
            alert("Chega meu fi")
            setCount(0)
          }}
        }
        >


        Clique aki XD
      </button>

      <p>Voce Clicou {count} Vezes</p>

    </section >
    </>
  )
}

export default App