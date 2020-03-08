import React,{useState} from 'react';
import './App.css';

function App() {
  const [width,setWidth] = useState(10);
  const [radius,setRadius] = useState(10);
  const [type,setType]   = useState('solid');
  const [type2,setType2] = useState('solid');
  const [type3,setType3] = useState('solid');
  const [type4,setType4] = useState('solid');
  const [color,setColor] = useState('#111111');
  const [background,setBackground] = useState('#f1f');

  return (
    <div className="App">
      <div  className="css-box">
          <div className="css">
          <p>border-width: {width}px;</p>
          <p>border-color: {color};</p>
          <p>border-style: {type} {type2} {type3} {type4};</p>
          <p>border-radius: {radius}px;</p>
        </div>
      </div>
      <div className="main">
        <div className="border" style={{backgroundColor:`${background}`,borderColor:`${color}`,borderWidth:`${width}px`, borderStyle:`${type} ${type2} ${type3} ${type4}`, borderRadius:`${radius}px`} }/>
        <div className="controls">
            <div className="control">
              <p>width</p>
              <input onChange={(value)=>{setWidth(value.currentTarget.value)}} type="range" min="1" max="100" className="slider" id="myRange"/>            
            </div>
            <div className="control">
              <p>Radius</p>
              <input onChange={(value)=>{setRadius(value.currentTarget.value)}} type="range" min="1" max="100" className="slider" id="myRange"/>            
            </div>
            <div className="grid">
            <div className="control">
              <p>Top</p>
              <select value={type} onChange={(value)=>{setType(value.currentTarget.value)}}>
                <option value="dotted">   dotted    </option>
                <option value="dashed">   dashed    </option>
                <option value="double">   double    </option>
                <option value="solid">    solid     </option>
                <option value="groove">   groove    </option>
                <option value="ridge">    ridge     </option>
                <option value="inset">    inset     </option>
                <option value="outset">   outset    </option>
                <option value="none">     none      </option>
                <option value="hidden">   hidden    </option>
              </select>
            </div>
            <div className="control">
              <p>Right</p>
              <select value={type2} onChange={(value)=>{setType2(value.currentTarget.value)}}>
                <option value="dotted">   dotted    </option>
                <option value="dashed">   dashed    </option>
                <option value="double">   double    </option>
                <option value="solid">    solid     </option>
                <option value="groove">   groove    </option>
                <option value="ridge">    ridge     </option>
                <option value="inset">    inset     </option>
                <option value="outset">   outset    </option>
                <option value="none">     none      </option>
                <option value="hidden">   hidden    </option>
              </select>
            </div>
            <div className="control">
              <p>Bottom</p>
              <select value={type3} onChange={(value)=>{setType3(value.currentTarget.value)}}>
                <option value="dotted">   dotted    </option>
                <option value="double">   double    </option>
                <option value="dashed">   dashed    </option>
                <option value="solid">    solid     </option>
                <option value="groove">   groove    </option>
                <option value="ridge">    ridge     </option>
                <option value="inset">    inset     </option>
                <option value="outset">   outset    </option>
                <option value="none">     none      </option>
                <option value="hidden">   hidden    </option>
              </select>
            </div>
            <div className="control">
              <p>Left</p>
              <select value={type4} onChange={(value)=>{setType4(value.currentTarget.value)}}>
                <option value="dotted">   dotted    </option>
                <option value="dashed">   dashed    </option>
                <option value="double">   double    </option>
                <option value="solid">    solid     </option>
                <option value="groove">   groove    </option>
                <option value="ridge">    ridge     </option>
                <option value="inset">    inset     </option>
                <option value="outset">   outset    </option>
                <option value="none">     none      </option>
                <option value="hidden">   hidden    </option>
              </select>
            </div>
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
