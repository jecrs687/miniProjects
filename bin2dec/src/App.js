import React,{useState} from 'react';
import './App.css';

function App() {
  const [binary, setBinary] = useState('0101')
  function binaryToDecimal(binary){
    var decimal = 0;  
    var split=[];
      split = binary.split('')
      split.forEach((value, index) => {
        decimal =decimal + (2 ** (index)) * value
      });
      return (decimal)
  }
  function inputBinary(data){
    document.oninput = (value) =>{
      if (value.data==='1' || value.data ==='0' || value.data===null)
      {
        setBinary(data)
      }else{
        setBinary(binary)
      }
    }
  }
  return (
    <div cslassName="App"> 
      <div className="body">
      <h1>Binary to decimal</h1>
        <div className="box-input">
          <p>Binary:</p>
          <input value={binary} onChange={(data)=>{inputBinary(data.currentTarget.value)}}/>
        </div>
        <div className="box-output">
          <p>Decimal:</p>
          <p className='output'>{binaryToDecimal(binary)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
