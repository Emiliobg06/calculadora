'use client';
import { useState } from 'react';

export default function Home() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operacion, setOperacion] = useState('suma');
    const [resultado, setResultado] = useState('');

    const calcular = async () => {
        const response = await fetch(`http://localhost:3001/operacion?num1=${num1}&num2=${num2}&operacion=${operacion}`);
        const data = await response.json();
        setResultado(data.resultado);
    };

    return (
        <div>
          <div className="flex justify-center items-start">
            <h1>Calculadora</h1>
          </div>
          <div className="flex justify-center">
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
          <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
              <option value="suma">+</option>
              <option value="resta">-</option>
              <option value="multiplicacion">*</option>
              <option value="division">/</option>
          </select>
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
          </div>
          <div className="flex justify-center">
          <button onClick={calcular}>Calcular</button>
          </div>
          <div className="flex justify-center">
            <h2>Resultado: {resultado}</h2>
          </div>
        </div>
    );
}