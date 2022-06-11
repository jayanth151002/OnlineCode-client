import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import TextEditor from './components/TextEditor';
import TopBar from './components/TopBar';
import Terminal from './components/Terminal';
import ResultBar from './components/ResultBar';

function App() {
  const [langs, setlangs] = useState({});
  const [code, getCode] = useState()
  const [id, getId] = useState();
  const [isSubmit, setSubmit] = useState(false)
  const [result, setResult] = useState({
    desc: "",
    id: "",
    message: "",
    output: "",
    time: ""
  });
  const [input, getInput] = useState("")

  useEffect(() => {
    axios.get('https://ce.judge0.com/languages/')
      .then(res => setlangs(res.data))
  }, [])

  const submitHandler = (e) => {
    setSubmit(true)
    e.preventDefault()
    console.log(input)
    const formdata = {
      language_id: id,
      source_code: btoa(code),
      stdin: btoa(input)
    }
    axios.post('/createsub', formdata)
      .then((res) => {
        console.log('done', res)
        setResult(() => {
          return {
            desc: res.data.desc,
            id: res.data.id,
            message: res.data.message,
            output: res.data.output,
            time: res.data.time
          }
        })
        setSubmit(false)
      })
      .catch((err) => console.log(err))
  }


  return (
    <div className="App">
      <TopBar langs={langs} getId={getId} submit={submitHandler} />
      <div className="editor">
        <TextEditor getCode={getCode} />
        <ResultBar result={result} />
      </div>
      <Terminal result={result} getInput={getInput} isSubmit={isSubmit} />
    </div>
  );
}

export default App;
