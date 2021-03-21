import React, {useState} from 'react';
import "../app.css"
import {db} from "../firebase";
const Contact = () =>{

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    const [loder, setLoder] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setLoder(true)

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
            })
            .then(()=>{
                alert('Your message has been submitted...')
                setLoder(false)
            })
            .catch((error)=>{
                alert(error.message)
                setLoder(false)
            })
        setName("")
        setEmail("")
        setMessage("")
    }

    return(
        <form className="form" onSubmit= {handleSubmit}>
            <h1>Contacts from Mobile</h1>

            <label>Name</label>
            <input placeholder="name"
             value={name}
             onChange={(e)=>setName(e.target.value)}></input>

            <label>Email</label>
            <input placeholder="Email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}></input>


            <label>Message</label>
            <textarea placeholder="Message" value={message}
             onChange={(e)=>setMessage(e.target.value)}></textarea>

            <button type="submit" style={{background : loder
            ? "#ddd" : "rgb(1, 1, 115)"}}>Submit</button>
        </form>
    )
}
export default Contact;