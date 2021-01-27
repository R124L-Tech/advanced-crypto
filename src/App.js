import React, { useRef } from 'react'
import { encrypt, decrypt } from "./crypto";
import './App.css';

function App() {
  let inputRef = useRef()
  let outputRef = useRef()

  const clickTranslate = (method) => {
    let inputText = inputRef.current.value
    if (inputText === '') {
      alert('🚫 Silahkan menginput text terlebih dahulu!')
    } else {
      outputRef.current.value = (method === 'encrypt') ? encrypt(inputText) : decrypt(inputText);
    }
  }

  return (
    // <div className="App">
    <div className="container">
      <h1>AES-156-CBC</h1>

      {/* INPUT */}
      <div className="input">
        <label htmlFor="input">Input</label>
        <textarea ref={inputRef} id="input" cols="30" rows="5" placeholder="Masukkan text disini..."></textarea>
      </div>

      {/* OUTPUT */}
      <div className="output">
        <label htmlFor="output">Output</label>
        <textarea ref={outputRef} id="output" cols="30" rows="5" placeholder="Hasil akan tampil disini!"></textarea>
      </div>

      {/* BUTTONS */}
      <div className="buttons">
        {/* ENCRYPT */}
        <button onClick={() => clickTranslate('encrypt')}>
          <div className='plain'>Hello</div>
          <i className="fa fa-long-arrow-right"></i>
          <div className='cypher'>&$%@#</div>
        </button>

        {/* DECRYPT */}
        <button onClick={() => clickTranslate('decrypt')}>
          <div className='cypher'>&$%@#</div>
          <i className="fa fa-long-arrow-right"></i>
          <div className='plain'>Hello</div>
        </button>
      </div>
    </div>
    // </div>
  );
}

export default App;
