import { useState } from "react";
import axios from 'axios';

const Waitlist = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post('https://mvp-template-v1-backend.onrender.com', {
                email,
            });
            setMessage("You are on the Waiting List");
            setEmail('');
        }catch(error){
            console.log(error);
            setMessage('Something went wrong!');
        }
    }

    return(
        <div style={{padding: '2rem'}}>
            <h1>Join the Waitlist</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
};

export default Waitlist;