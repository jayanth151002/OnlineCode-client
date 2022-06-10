import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import TextEditor from './components/TextEditor';
import TopBar from './components/TopBar';
import Terminal from './components/Terminal';

function App() {
  const [langs, setlangs] = useState({});
  const [code, getCode] = useState()
  const [id, getId] = useState();
  const [result, setResult] = useState("");
  const [input, getInput] = useState("")

  useEffect(() => {
    axios.get('https://ce.judge0.com/languages/')
      .then(res => setlangs(res.data))
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    const formdata = {
      language_id: id,
      source_code: btoa(code),
      stdin: btoa(input)
    }
    axios.post('/createsub', formdata)
      .then((res) => {
        console.log('done', res)
        setResult(res.data)
      })
      .catch((err) => console.log(err))
  }


  return (
    <div className="App">
      <TopBar langs={langs} getId={getId} submit={submitHandler} />
      <TextEditor getCode={getCode} />
      <Terminal result={result} getInput={getInput} />
    </div>
  );
}

export default App;
