import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  const setUper = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const setLower = () => {
    setText(text.toLocaleLowerCase());
    props.showAlert("Converted to Lowercase!", "warning");
  };
  const setClear = () => {
    setText("");
    props.showAlert("Clear text!", "primary");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy text done!", "info");
  };
  const onhandelchange = (event) => {
    setText(event.target.value);
  };

  const [mode, setMode] = useState('light');
  const darkbtn = () => {
    setMode('secondary');
    props.showAlert("Dark mode is on !", "dark");
  };
  const normal = () => {
    setMode('light');
    props.showAlert("Normal mode is on!", "light");
  };

  return (
    <div className={`container-fluid bg-${mode}`}>  
     <div  className={`container text-${mode==='light'? 'Dark' : 'light'}`}>
      <button
        onClick={darkbtn}
        onDoubleClick={normal}
        className="btn btn-warning  m-1"
      >
        Cange Mode
      </button>
      <h1>Change you Text </h1>
        <textarea
          rows="10"
          cols="100"
          value={text}
          onChange={onhandelchange}
          id="mybox"
        />
      <div className="d-flex ">
        <button onClick={setUper} className="btn btn-success m-1">
        
          Change text into Uppercase
        </button>
        <button onClick={setLower} className="btn btn-warning m-1">
         
          Change text into Lowercase
        </button>
        <button onClick={setClear} className="btn btn-primary m-1">
          Clear
        </button>
        <button onClick={copyText} className="btn btn-info m-1">
          Copy text
        </button>
      </div>
      <div>
        <h2>Text Summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} Charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
      </div>
      <h2>Text Preview</h2>
      <p>{text.length > 0 ? text : "enter some text"}</p>
    </div>
    </div>
    
  );
};

export default Form;
