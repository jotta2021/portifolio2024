import Header from "./components/header/header";
import Home from "./pages/home/home";
import React,{useState} from 'react'
function App() {
  const [light, setLight] = useState(true);
  return (
    <div className="App">
      <Header light={light} setLight={setLight}/>
      <Home  light={light} setLight={setLight}/>
    </div>
  );
}

export default App;
