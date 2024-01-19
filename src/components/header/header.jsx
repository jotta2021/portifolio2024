import * as C from "./index.ts";

import Logo from "./../../assets/LOGO.png";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import Colors from "./../../assets/colors.json";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import React, { useState } from "react";
import { Button ,Switch} from "@mui/material";

export default function Header({light,setLight}) {

function handleLight(){
    setLight(!light)
    console.log(light)
}
  return (
    <C.Container light={light}>
      <img src={Logo} alt="Logo" style={{ width: 40 }} />
      <C.list light={light}>
        <ul>
          <li>Home</li>
        <li>About</li>
        </ul>
        
        <Switch 
        onChange={handleLight}
        defaultCheked
        icon={<WbSunnyIcon />}
        checkedIcon={<Brightness3Icon/>}
        color='default'
        
        />
         <Button  
         style={{backgroundColor:Colors.blueMer}}
         variant="contained">Contact</Button>
      </C.list>
      
    </C.Container>
  );
}
