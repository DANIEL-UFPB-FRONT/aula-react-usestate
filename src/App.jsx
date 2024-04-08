import React, { useState } from "react";
import "./App.css"

function App() {
  // Declara uma nova variável de state, que chamaremos de "count"
  const [count, setCount] = useState(0);

  // Atenção especial ao lidar com estados que são objetos complexos
  // Caso apenas parte do objeto precisar ser atualizado, lembrar de copiar os demais campos
  const [data, setData] = useState({message: "Valor default", id: 1})

  return (
    <div id="container">
      <p>Você clicou {count} vezes</p>
      <div id="container-buttom">
        <button onClick={() => setCount((prev) => prev + 1)}>Clique aqui</button>
        <button onClick={() => setCount(0)}>Limpar contador</button>
      </div>
      <label>Insira uma mensagem no input com id #{data.id}</label>

      {/* Aqui usamos desestruturação para atualizar apenas o campo message e copiar o campo id de forma inalterada
      Evitar:
        <input type="text" onInput={event => setData(event.target.value)}></input>
        ou
        <input type="text" onInput={event => setData({message: event.target.value})}></input>

      */}
      <input type="text" onInput={event => setData({...data, message: event.target.value})}></input>
      <h3>{data.message}</h3>
    </div>
  );
}

export default App;