import { useState } from 'react';
import Slides from './SlideData.jsx';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components'
import './style/header.scss'
 
 const Slider=styled.div`
width:100%;
height:600px;
margintop:70px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
background-repeat: no-repeat;
background-position:center;
background-size: cover;
filter: brightness(70%);
transition:2s ease-in-out;

 &:hover{
    filter: brightness(100%);
    
}`

const Left=styled.div`
display:flex;
aling-item:center;
.leftIcone{
  font-size:60px;
  cursor:pointer;

}
`
const Right=styled.div`
display:flex;
align-items:center;
.rightIcon{
  font-size:60px;
  cursor:pointer;
}
`
const Center=styled.div`
.title{
  color:red;
  font-size:40px;
}
.txt{
  margin-top:30px;
letter-spacing:3px;
}
.btn{
  background-color: #8ddafc ;
  padding:20px 35px;
  border-radius:15px;
  border:none;
  margin-top:70px;
  font-size:20px;
  cursor:pointer;
  &:hover{
    background-color: #3797c0 ;
    transition:1s ease-in-out;
  }
}
`
export default function Header() {

    const [Image,setImage]=useState(0)
 
    let slideLeft=()=>{Image >0 ? setImage(Image-1) : setImage(Slides.length-1)}      
    let  slideRight=()=>{Image < Slides.length-1 ? setImage(Image+1) : setImage(0)} 
 
  return (
    <div className='container'>
        

        <Slider  style={{backgroundImage:`url(${Slides[Image].img})`}}>
             <Left><ArrowBackIosIcon onClick={slideLeft} className='leftIcone' /></Left>
            <Center >
              <div className='title'>
                   <h1>{Slides[Image].title}</h1>
                </div>
               <div className='txt'>
                  <h3>{Slides[Image].text} </h3>
                </div>
                <button className='btn'>Explore Now</button>
            </Center>
        <Right ><ArrowForwardIosIcon onClick={slideRight} className='rightIcon'/></Right>
        </Slider>

    </div>
  )
}
