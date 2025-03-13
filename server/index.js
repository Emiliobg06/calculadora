const express = require('express');
const app = express();
const port = 3001;

app.get('/operacion', (req, res) => {
    const { num1, num2, operacion } = req.query;
    let resultado;

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