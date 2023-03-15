import styled from "styled-components"
import Footer from "../components/Footer";
import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
  
const Container=styled.div`

display: flex;
flex-direction: column;
margin-top:100px;
align-items: center;
justify-content: center;
form{
  border: 1px solid black;
  padding: 20px;
  h4{
      text-align: center;
      margin:10px 5px;
  }
  input{
      margin: 5px 0px;
      width: 300px;
      height: 40px;
  }
  button{
    margin: 15px 0px;
    width: 100%;
    height: 40px;
    background-color: #0077b6;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #023e8a;
    }
  }
`

export default function Signup() {
  //storing input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
   //state to validating the employee's name
  const [validName, setValidName] = useState(false);
//state to validating the employee's password
  const [validPass, setValidPass] = useState(false);
 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/signin";

  //error:to store error message
  const [error, setError] = useState("");
 
  useEffect(() => {
    //check if the employees name is valid
    const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;

        setValidName(USER_REGEX.test(userName));
      }, [userName,]);
  
  useEffect(() => {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    //check if the employees name is valid
        setValidPass(PWD_REGEX.test(password));
      }, [password]);
  

//function to handle form submission
  
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validName && validPass) {
    try {
      fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({
          role: 'user',
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
          
        }
      
        ),
      });
 //once successfully registered the user is navigated to the sign-in page
      navigate(from, { replace: true });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        console.log("no server response");
        setError(err.message);
      } else if (err?.response?.status === 409) {
        console.log("employee already exist");
        setError(err.message);

      } else {
        console.log("registration failed");
        setError(err.message);

      }
    }
  }
};

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <h4>Create Account</h4>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <label>
            <p>First Name </p>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label>
            <p>Last Name</p>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label>
            <p>Username</p>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            <p>Mobile</p>
            <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <label>
            <p>Confirm password</p>
            <input type="password" value={c_password} onChange={(e) => setC_Password(e.target.value)} />
          </label>
          <div>
            <button type="submit"  >Register</button>
          </div>
        </form>
      </Container>
      <Footer />
    </>
  );
}