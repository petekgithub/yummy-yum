import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  const submitHandler=(e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  } 

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <BsSearch></BsSearch> 
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  )
}


const FormStyle = styled.form`
  margin: 3rem 20rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(30deg, #737DFE, #FFCAC9);
    font-size: 1.5rem;
    color: black;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: black;
  }
`


export default Search