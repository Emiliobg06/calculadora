const express = require('express');
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

const app = express();
const port = 3001;
app.get('/operacion', (req, res) => {
  const { num1, num2, operacion } = req.query;
  let resultado;
  if (isNaN(num1)) {
    return res.status(400).json({ error: 'num1 no es un número válido' });
  }
  if (isNaN(num2)) {
    return res.status(400).json({ error: 'num2 no es un número válido' });
  }
  switch (operacion) {
    case 'suma':
      resultado = parseFloat(num1) + parseFloat(num2);
      break;
    case 'resta':
      resultado = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiplicacion':
      resultado = parseFloat(num1) * parseFloat(num2);
      break;
    case 'division':
      if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'No se puede dividir por cero' });
      }
      resultado = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      return res.status(400).json({ error: 'Operación no válida' });
  }
  res.json({ resultado });
});
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});