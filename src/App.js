import React, { useRef } from 'react'
import { encrypt, decrypt } from "./crypto";
import Header from "./components/Header";
import TextField from './components/TextField'
import './App.css';

function App() {
  let inputRef = useRef()
  let outputRef = useRef()
  let encryptRef = useRef()
  let decryptRef = useRef()

  const clickTranslate = (method) => {
    let inputText = inputRef.current.value
    console.log(inputRef.current);
    console.log(encryptRef.current);
    if (inputText === '') {
      alert('🚫 Silahkan menginput text terlebih dahulu!')
    } else {
      outputRef.current.value = (method === 'encrypt') ? encrypt(inputText) : decrypt(inputText);
    }
  }

  return (
    <div className="container">
      <Header
        title="AES - 156 - CBC"
      />

      {/* INPUT */}
      <div className="textField-container">
        <label className="textField-label" htmlFor="input">Input</label>
        <textarea
          ref={inputRef}
          className="textField-textarea"
          id="input"
          cols="30"
          rows="4"
          placeholder="Masukkan text disini..."
        ></textarea>
      </div>

      {/* OUTPUT */}
      <div className="textField-container">
        <label className="textField-label" htmlFor="output">Output</label>
        <textarea
          ref={outputRef}
          className="textField-textarea"
          id="output"
          cols="30"
          rows="4"
          placeholder="Hasil akan tampil disini!"
        ></textarea>
      </div>

      {/* BUTTONS */}
      <div className="buttons-container">
        {/* ENCRYPT */}
        <button className="btn" ref={decryptRef} onClick={() => clickTranslate('encrypt')}>Encrypt</button>

        {/* DECRYPT */}
        <button className="btn" ref={encryptRef} onClick={() => clickTranslate('decrypt')}>Decrypt</button>
      </div>
    </div>
  );
}

export default App;
