const express = require('express');
const app = express();
const { isPrime } = require('./helper');


app.use(express.json());

app.get('/is-prime/:number', (req, res) => {
    const num = parseInt(req.params.number);
    if (isNaN(num)) {
        return res.status(400).json({ error: 'Invalid number input' });
    }
    return res.json({ number: num, isPrime: isPrime(num) });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
