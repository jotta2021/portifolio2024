import styled from "styled-components";
import Colors from '../../assets/colors.json'
export const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
background-color: ${props => (props.light? 'white': '#3c276b')};


img{
    margin-left:3rem;
}
`
export const list = styled.div`
display:flex;
gap:2rem;
justify-content:center;
align-items:center;
margin-right:3rem;
margin-left:3rem;
li{
    font-size:1.2rem;
    color: ${props => (props.light ? 'black' : 'white')};
   cursor:pointer;
    
}
li:hover{
        color:${Colors.blueMer}
}
ul{
    display:flex;
    gap:2rem;
}
svg{
    
    
    background-color:grey;
    border-radius:1rem;
    background-color:blue;
    
    
}
`
export const Home = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
box-sizing:border-box;
background-color: ${props => (props.light? 'white': '#3c276b')};
width:'100%';
height:'100%';
align-items:center;



`
export const ContentHome = styled.div`
margin-left:3rem;
margin-top:10rem;

h1{
    font-size:4rem;
    color: ${props => (props.light? '#191919':'white')} ;
}
span{
    color:${Colors.blueMer}
}
h2{
    font-size:4rem;
    margin-top:-2rem;
    color: ${props => (props.light? '#191919':'white')} ;
}



`
export const ContentImage= styled.div`
z-index:1;
margin-top:5rem;
margin-left:10rem;


`
export const ButtonContainer = styled.div`
gap:2rem;
display:flex;
align-items:center;
justify-content:center;
a{
    color:white;
}



`

export const SectionTwo = styled.div`
margin-top:10rem;
justify-content:space-around;
align-items:center;
display:flex;

background-color:#f5f5f5;
width:100vw;
h2{
    font-size:2rem;
    color:${props=> (props.light? '#2c2c2c' : 'white' )}  ;
}
p{
    width:25rem;
    text-align:justify;
}
.progressBar{
 border:   1px solid black;
 width:20rem;
}
.container{
   width:70%;
   
     background-color: ${Colors.blue};
}
completed{

 
}
.
`
export const About= styled.div`
background-color:${Colors.blueLight};
padding:1rem;
border-radius:0.5rem;
display:flex;

`
export const Skills = styled.div``