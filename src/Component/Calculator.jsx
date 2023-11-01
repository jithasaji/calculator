import React, { useState } from 'react'
import './Calculator.css';

function Calculator() {
const handleCalculation = ()=>{
} 
console.log("jitha");

 const [input,setInput] = useState("jitha")
  return (
    <div className='container'>
      <div className='section'>
        <div className='text'>
          <input  readOnly type="text" name="txt" placeholder="0" />
        </div>
        <div className='number'>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('kavya')} >AC</div>
            
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('C')}>C</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('%')}>%</div>
          </div>
          <div>
            <div class="button-style grey-bg">/</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('7')}>7</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('8')}>8</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('9')}>9</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('*')}>*</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('4')}>4</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('5')}>5</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('6')}>6</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('-')}>-</div>
          </div>
          <div>
            <div class="button-style light-grey-bg"onClick={() => handleCalculation('1')}>1</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('2')}>2</div>
          </div>
          <div>
            <div class="button-style light-grey-bg"onClick={() => handleCalculation('3')}>3</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('+')}><i>+</i></div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('.')}>.</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('0')}>0</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('=')}>=</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('DEL')}>DEL</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Calculator
