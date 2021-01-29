import React, { useRef } from 'react'
import { encrypt, decrypt } from "./crypto";
import Header from "./components/Header";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  textField: {
    marginTop: '20px',
    width: '40%',
    backgroundColor: '#1c1d1f',
    color: 'white'
  },
});

function App() {
  const classes = useStyles();
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
    <div className="container">
      <Header
        title="AES - 156 - CBC"
      />

      <TextField
        id="filled-basic"
        label="Input"
        variant="filled"
        multiline
        className={classes.textField}
      />

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
  );
}

export default App;
