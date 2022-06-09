
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React,{ useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setDarkMode] = useState('dark');
const toggleMode=()=>{
  if(mode==='light')
    {setDarkMode('dark');
  document.body.style.background='gray'}
  else{setDarkMode('light');
  document.body.style.background='light'}

}
  return (
  <>
{/* <Navbar title="Hello Cse" about="Hi"/> */}
{/* <Navbar/> */}
<Navbar title="Hello Cse" mode={mode} toggleMode={toggleMode}/>
<Alert alert="This is alert"/>
<div className="container my-3">
  <TextForm heading="Enter any text"/>
</div>
<About/>
    </>
  );
}

export default App;
