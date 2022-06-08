import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import TextEditor from './components/TextEditor';
import TopBar from './components/TopBar';

function App() {
  const [langs, setlangs] = useState({});
  const [code, getCode] = useState()
  const [id, getId] = useState();
  const [result, setResult] = useState({});

  useEffect(() => {
    axios.get('https://ce.judge0.com/languages/')
      .then(res => setlangs(res.data))
  }, [])

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
      {/* <header className="App-header">
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
      </header> */}
      <TopBar langs={langs} getId={getId} submit={submitHandler} />
      <TextEditor getCode={getCode} />
    </div>
  );
}

export default App;
