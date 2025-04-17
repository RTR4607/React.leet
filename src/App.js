import React,{useState} from 'react';
import './App.css';
import FunctionComponent from './components/FunctionComponent.jsx';
import ClassComponent from './components/ClassComponent.jsx';
import Outer from './components/Closures.jsx';
import OnClick from './components/EventHandlers.jsx';
import ReactHooks from './components/ReactHooks.jsx';
import ParentComponent from './props/ParentComponent.jsx';

function Button({label}){
  return <button>{label}</button>
}
function Header(){
  const[name,setName]=useState("Thirupathi");

  const nameChange = () => setName("React")

    return <header><h2>My name is {name}</h2><button onClick={nameChange}>Click to rename</button></header>
  }


function Content(){
  return <p>This is content area</p>
}

function Footer(){
  return <fotter><h2>Footer area</h2></fotter>
}

function App() {
  return (
    <div>
    <Header />
    <Button label="SignIn" />
    <Button label="Login" />
    <Content />
    <FunctionComponent />
    <ClassComponent />
    <Outer />
    <Footer />
    <ReactHooks />
    <OnClick />
    <ParentComponent />
    </div>
  );
}

export default App;
