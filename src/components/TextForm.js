import React, {useState} from 'react'

/*when working with state then here  [a, b] means a will have value and b is the function
 using which I will update value of a. We can provide default value inside useState too*/

/*hooks are something that help you to use class features without creating a class */
export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // setText("set text here"); //correct way to set text which will be assigned to text variable
    // text = "set text here"  //wrong way to set text
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'black', color:props.mode==='dark'?'black':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in textbox above"}</p>
    </div>
    </>
  )
}
