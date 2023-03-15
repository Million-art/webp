import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 90vh;
  align-items: center;
  justify-content: center;

  form {
    border: 1px solid black;
    padding: 20px;

    h4 {
      text-align: center;
      margin: 10px 5px;
    }

    input {
      margin: 5px 0px;
      width: 300px;
      height: 40px;
    }

    button {
      margin: 10px 0px;
      width: 300px;
      height: 40px;
      font-size: 20px;
      font-weight: bold;
      font-family: ' sans-serif';
      color: white;
      background-color: rgb(15, 148, 103);
      border-radius: 15px;

      &:hover {
        background-color: rgb(15, 130, 103);
      }
    }

    small {
      cursor: pointer;
      font-size: 15px;
    }
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const forget = () => {
    navigate("/forget");
  };

 
   
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
    } else {
      fetch('http://localhost:3000/user', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
      .then((response) => response.json())
      .then((messages) => {
        
          console.log('sjd')
        
      });

    }
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <h4>Welcome Back 👋</h4>

          <label>
            <div style={{ color: 'red' }}>
              {error && email.length < 1 ? 'incorrect email!!!' : ''}
            </div>
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <div style={{ color: 'red' }}>
              {error && password.length < 1 ? 'empty password!!!' : ''}
            </div>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <br />

          <button type="submit">Submit</button>

          <br />

          <label>
            <small onClick={forget}>{"<"} forget password?</small>
          </label>

          <br />

          <small>
            <Link to='/Signup'>Create an account</Link>
          </small>
        </form>
      </Container>

      <Footer />
    </>
  );
}

export default Login;
