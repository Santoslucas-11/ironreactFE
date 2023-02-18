import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signup } from '../api';
import { toast, Toast } from 'react-toastify';
function Signup() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
    const response = await signup({ email, password });
    if (response.data.message) {
      toast.error(response.data.message)
      setPassword("");
      setEmail("");
    } else {
      toast.success("User Created");
      navigate("/");
    }
  } catch (e) {
    toast.error(`error ${e}`);
  }
  }
  return (
    <>
    <h3>Signup</h3>
    <form onSubmit={handleSubmitForm}>
      <label htmlFor='email'>Email</label>
      <input id='email' type="text" value={email} onChange={handleEmailChange}/>
      <label htmlFor='password'>Password</label>
      <input id='password' type="password" value={password} onChange={handlePasswordChange}/>
    <button type='submit'>Sign up</button>
    </form>
    <p>Already have an account?</p>
    <Link to="/login">Login</Link>
    </>
  );
}
export default Signup;