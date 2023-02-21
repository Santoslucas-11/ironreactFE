import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addComment,} from '../api';


function AddComment() {
    const [ title, setTitle] = useState("");
    const [ description, setDescription ] = useState("");
    
    const navigate = useNavigate();
    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleDescritpionChange(event) {
        setDescription(event.target.value);
    }
   
    async function handleSubmitForm(event) {
        event.preventDefault();
        console.log({ title, description });
       
        await addComment({title, description});
        
        navigate("/subjects");
    }
  return (
    <form onSubmit={handleSubmitForm}>
        <label htmlFor='title'>Title</label>
        <input id='title' type="text" value={title} onChange={handleTitleChange}/>
        <label htmlFor='description'>Description</label>
        <input id='title' type="text" value={description} onChange={handleDescritpionChange}/>
        <button className='button' type='submit'> Add Comment</button>
    </form>
  );
}
export default AddComment;