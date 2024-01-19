import * as C from './../../components/header/index.ts'
import Colors from "./../../assets/colors.json";
import React, { useState,useEffect ,useRef} from "react";
import { Button } from "@mui/material";
import Lottie from 'lottie-react';
import Background from '../../assets/background.json'
import LightBack from '../../assets/teste.json'
import Me from '../../assets/me.png'
import ElementoBack from '../../assets/ElementoBack.json'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ProgressBar from '@ramonak/react-progress-bar';
export default function Home({light}) {
 

    const [stacks,setStacks] = useState([
        "Web","Mobile","React JS","React Native","Typescript"
    ])
    const [currentStack,setCurrentStack] = useState(0)
const sectionTwo= useRef(null);

    useEffect(()=> {
const intervalId = setInterval(()=> {
    setCurrentStack((prevStack) => 
    prevStack === stacks.length -1? 0 : prevStack+1
    );
},2000)
return()=> clearInterval(intervalId)
    },[stacks])
   //   <img src={Me} alt="me photo" style={{width:350,height:'auto'}}/>
 
 //função pra rolar pra segunda seção
 const scrollToSecondSection =()=> {
  if(sectionTwo.current){
    sectionTwo.current.scrollIntoView({behavior:'smooth'})
  }
 }
 
   return (
    <C.Home light={light}>
      <div style={{display:'flex'}}>

         <Lottie
    style={{position:'absolute',
    display:light?'none': 'flex'
    }}
    animationData={Background}
    loop={true}  
    autoPlay={true}  
    /> 
   
    <C.ContentHome light={light} style={{zIndex:1}}>
        <h1 >Me chamo Joanderson,</h1>
        <h2>Desenvolvedor <span>{stacks[currentStack]}</span></h2>
        <C.ButtonContainer>
  <Button 
  variant='contained'
  startIcon={<FaLinkedin size={26} color='white'/>}
  style={{backgroundColor:Colors.blueMer}}
  > <a target='_blank' href='https://br.linkedin.com/in/joanderson-luan-santos-0a187a252'>Linkedin</a>
  </Button>
  <Button 
  variant='contained'
  startIcon={<FaGithub size={26} color='white'/>}
  style={{backgroundColor:Colors.blueMer}}
  >
    <a target='_blank' href='https://github.com/jotta2021'>Github</a>
  </Button>
</C.ButtonContainer>
    </C.ContentHome>
   
    <C.ContentImage >
      <Lottie
    style={{width:500}}
    animationData={ElementoBack}
    autoPlay={true}
    loop={true}
    />
    </C.ContentImage>

      </div>
<MdKeyboardDoubleArrowDown
onClick={scrollToSecondSection}
style={{marginTop:10,cursor:'pointer',zIndex:100}} size={70} color={Colors.blueMer}/>     

<C.SectionTwo light={light} ref={sectionTwo}>
 
  <C.About>

    <div>
        <h2>Sobre Mim</h2>
      <p>Olá, sou Joanderson, um desenvolvedor apaixonado por tecnologia, especializado em criar experiências incríveis para a web e dispositivos móveis. Minha expertise inclui HTML, CSS, React JS, React Native e JavaScript. Trabalho com eficiência em ambientes ágeis, utilizando Firebase e MySQL para gerenciar dados. Estou sempre buscando desafios emocionantes e oportunidades para aprender e crescer. Vamos colaborar e transformar suas ideias em realidade!</p>
    </div>


 
 
 </C.About>

<C.Skills>
  <h3>HTML</h3>
<ProgressBar completed={70}
completedClassName='completed'
className='progressBar'
barContainerClassName='container'
/>
<h3>CSS</h3>
<ProgressBar completed={70}
completedClassName='completed'
className='progressBar'
barContainerClassName='container'
/>
<h3>JAVASCRIPT</h3>
<ProgressBar completed={70}
completedClassName='completed'
className='progressBar'
barContainerClassName='container'
/>

</C.Skills>
  


</C.SectionTwo>
    
    </C.Home>
  );
}
