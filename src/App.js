import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [code, setCode]=useState()
  const [id, setId] = useState();
  const [result, setResult] = useState({});
  const submitHandler = (e) => {
    e.preventDefault()
    const formdata = {
      language_id: id,
      source_code: btoa(code)
    }
    axios.post('/createsub', formdata)
      .then((res) => {
        console.log('done', res.data)
        setResult(res.data.stdout)
      })
      .catch((res) => console.log(res))
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div>
          <input onChange={e => { setId(e.target.value) }} />
          </div>
          <div>
          <input onChange={e => { setCode(e.target.value) }} />
          </div>
          <button onClick={submitHandler}>Submit</button>
          <h1>{result ? result.stdout : ""}</h1>
        </form>
      </header>
    </div>
  );
}

export default App;
