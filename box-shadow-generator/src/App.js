import React,{useState} from 'react';
import './App.css';

function App() {
  const [hOffset,setHOffset] = useState(10);
  const [vOffset,setVOffset] = useState(10);
  const [blur,setBlur] = useState(10);
  const [spread,setSpread] = useState(10);
  const [type,setType]   = useState('');
  const [color,setColor] = useState('#111111');
  const [background,setBackground] = useState('#f1f');

  return (
    <div className="App">
      <div  className="css-box">
          <div className="css">
          <p>box-shadow: {hOffset}px {vOffset}px {blur}px {spread}px {color} {type};</p>
        </div>
      </div>
      <div className="main">
        <div className="border" style={{backgroundColor:`${background}`,boxShadow:`${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color} ${type}`} }/>
        <div className="controls">
            <div className="control">
              <p>h-offset</p>
              <input onChange={(value)=>{setHOffset(value.currentTarget.value)}} type="range" min="0" max="100" className="slider" id="myRange"/>            
            </div>
            <div className="control">
              <p>v-offset</p>
              <input onChange={(value)=>{setVOffset(value.currentTarget.value)}} type="range" min="0" max="100" className="slider" id="myRange"/>            
            </div>
            <div className="control">
              <p>blur</p>
              <input onChange={(value)=>{setBlur(value.currentTarget.value)}} type="range" min="0" max="100" className="slider" id="myRange"/>            
            </div>
            <div className="control">
              <p>spread</p>
              <input onChange={(value)=>{setSpread(value.currentTarget.value)}} type="range" min="0" max="100" className="slider" id="myRange"/>            
            </div>
            <div className="control">
              <p>type</p>
              <select value={type} onChange={(value)=>{setType(value.currentTarget.value)}}>
                <option value="">          default    </option>
                <option value="inset">     inset    </option>

              </select>
            </div>
            <div className="control">
              <p>Color</p>
              <input onInput={(value)=>{setColor(value.currentTarget.value)}} style={{background:`${color}`,color:color==='#111' || color === '#111111'? 'white':'black'}} value={color} type='text'/>
            </div>
            <div className="control">
              <p>Background</p>
              <input onInput={(value)=>{setBackground(value.currentTarget.value)}} style={{background:`${background}`,color:background==='#111' || background === '#111111'? 'white':'black'}} value={background} type='text'/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
