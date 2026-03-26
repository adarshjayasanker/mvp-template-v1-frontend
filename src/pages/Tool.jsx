import axios from "axios";
import { useState } from "react";

const Tool = () => {

    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async() => {
        try{
            const res = axios.post('https://mvp-template-v1-backend.onrender.com/create', {
                text,
            });
            setResult("Processed: "+ text);
        }catch(error){
            console.error(error);
            setResult("Something went wrong");
        }
    }
    return(
        <div style={{padding: '2rem'}}>
            <h1>Text Tool</h1>
            <textarea placeholder="Enter Text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleSubmit}>Process</button>
            <p>{result}</p>
        </div>
    )
};

export default Tool;