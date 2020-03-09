import React, { useState } from 'react';
import './App.css';

function App() {
  const [operator, setOperator] = useState('')
  const [number, setNumber] = useState('')
  const [number2, setNumber2] = useState('')


  const onClick = (value) =>{
    var temp = number.toString()
    temp = temp.replace(',', '')
    var temp2 = number2.toString()
    temp2 = temp2.replace(',', '')

    var tecla = value.currentTarget.textContent;
    if(tecla==='0' || tecla==='1' || tecla==='2' || tecla==='3' ||tecla==='4' || tecla==='5' ||tecla==='6' ||tecla==="7" ||tecla==='8' ||tecla==='9'){
      if(operator==='')
      {if(number.length<10)
        setNumber((number.length+1)%4===0 && number.length>1 && temp>99?number.concat(','+ tecla):number.concat(tecla))}
       else{
      if(number2.length<10)
      setNumber2((number2.length+1)%4===0 && number2.length>1 && temp2>99?number2.concat(','+ tecla):number2.concat(tecla))}
      return
    }

    setNumber(temp)
    setNumber2(temp2)
    if(number!=='')
    switch(tecla){
      case 'AC':
        setNumber('')
        setNumber2('')
        setOperator('')
        break;
      case 'C':
        number2===''?
          setNumber(''):setNumber2('')
        break;
      case '+/-':
        setNumber(`-${number2}`)
        break;
      case '=':
        switch(operator){
          case '/':
            setNumber(number / number2)
            break
          case 'x':
            setNumber(number * number2)
            break
          case '+':
            setNumber(parseFloat(number) + parseFloat(number2))
            break
          case '-':
            setNumber(number - number2)
            break
          case '%':
            setNumber((number/100) * number2)
            break
          default:
            break
                     
        }
        if(number.length>7)setNumber('ERR')
        setNumber2('')
        setOperator('')
        break;
      default:
        setOperator(tecla)
    }
  }
	return (
		<div className="App">
		 <div className="calculator">
			 <input value={operator===''?number:number2}/>
				<div className="box-operatorBody">
					<div className="box-operatorBodyLeft">
								<div className="box-operatorHeader">
                  <div onClick={onClick} className="box-operator">{number===''?'AC':operator===''?'C':number2===''?'AC':'C'}</div>
									<div onClick={onClick} className="box-operator">+/-</div>
									<div onClick={onClick} className="box-operator">%</div>
								</div>
								<div className="box-operatorNumbers">
									<div onClick={onClick} className="box-operator">7</div>
									<div onClick={onClick} className="box-operator">8</div>
									<div onClick={onClick} className="box-operator">9</div>
									<div onClick={onClick} className="box-operator">4</div>
									<div onClick={onClick} className="box-operator">5</div>
									<div onClick={onClick} className="box-operator">6</div>
									<div onClick={onClick} className="box-operator">1</div>
									<div onClick={onClick} className="box-operator">2</div>
									<div onClick={onClick} className="box-operator">3</div>
									<div onClick={onClick} className="box-operator">0</div>
							  </div>
							</div>

							<div className="box-operatorBodyRight">
                <div onClick={onClick} className="box-operator">/</div>
								<div onClick={onClick} className="box-operator">x</div>
								<div onClick={onClick} className="box-operator">-</div>
								<div onClick={onClick} className="box-operator">+</div>
								<div onClick={onClick} className="box-operator">=</div>
							</div>
				</div>
		 </div>
		</div>
	);
}

export default App;
