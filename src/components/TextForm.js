import React,{useState} from 'react';
export default function Textform(props) {
  const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () =>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (ev) =>{
    setText(ev.target.value);
  }
  
  const [text, setText] = useState('Vinodkumar Chowdarys');
    return (<>
    <div className='container-my5'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="mybox" rows="8"></textarea>
            </div>
            {/* <button className="btn btn-primary" 
            onClick={() => setText(text + 1)} >Convert to uppercase</button> */}
            <button className="btn btn-primary mx-8" 
            onClick={handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2" 
            onClick={handleLoClick} >Convert to Lowercase</button>
            </div>
            <div className='container my-2'>
              <h1>Text Summary</h1>
              <p>{text.split(" ").length} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length} minutes to read</p>
            </div>
            </>
       
  );
}
