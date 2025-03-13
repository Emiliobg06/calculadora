'use client';
import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = async () => {
    if (!num1 || !num2 || !operacion) {
      alert('Por favor, ingresa ambos números y selecciona una operación.');
      return;
    }

    const response = await fetch(
      `http://localhost:3001/operacion?num1=${num1}&num2=${num2}&operacion=${operacion}`
    );
    const data = await response.json();
    setResultado(data.resultado);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Inputs and Result Display */}
      <div className="flex flex-col items-center mt-10 space-y-4">
        <h1 className="text-2xl font-bold">Calculadora</h1>
        <div className="flex space-x-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Número 1"
          />
          <span className="text-xl">{operacion}</span>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Número 2"
          />
        </div>
        <button
          onClick={calcular}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Calcular
        </button>
        <h2 className="text-xl">Resultado: {resultado}</h2>
      </div>

      {/* Operation Buttons at Bottom Left */}
      <div className="fixed bottom-20 left-0 p-4 space-x-2">
        <button
          onClick={() => setOperacion('suma')}
          className="text-black px-4 py-2 rounded hover"
        >
          +
        </button>
        <button
          onClick={() => setOperacion('resta')}
          className="text-black px-4 py-2 rounded hover"
        >
          -
        </button>
        <button
          onClick={() => setOperacion('multiplicacion')}
          className="text-black px-4 py-2 rounded hover"
        >
          *
        </button>
        <button
          onClick={() => setOperacion('division')}
          className="text-black px-4 py-2 rounded hover"
        >
          /
        </button>
      </div>
    </div>
  );
}