import './App.css';
import { encrypt, decrypt } from "./crypto";

function App() {
  output = ''

  return (
    <div className="App">
      <div class="container">
        <h3>ASCII Caesar Chiper</h3>
        <div class="input">
          <label for="input">Input</label>
          <textarea id="input" cols="30" rows="5"></textarea>
        </div>
        <div class="output">
          <label for="output">Output</label>
          <textarea id="output" cols="30" rows="5">{output}</textarea>
        </div>
        <div class="buttons">
          <button id="encrypt" onClick={output = encrypt("hello")}><div class="plain">Hello</div> <i class="fa fa-long-arrow-right"></i> <div class="chyper">&%$#@</div></button>
          <button id="decrypt"><div class="chyper">&%$#@</div> <i class="fa fa-long-arrow-right"></i> <div class="plain">Hello</div></button>
        </div>
      </div>
    </div>
  );
}

export default App;
