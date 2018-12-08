let persons = [
    {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1,
    },
    {
        name: 'Martti Tienari',
        number: '040-123456',
        id: 2,
    },
    {
        name: 'Arto Järvinen',
        number: '040-123456',
        id: 3,
    },
    {
        name: 'Lea Kutvonen',
        number: '040-123456',
        id: 4,
    },
];

const express = require('express')

const app = express();

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/info', (req, res) => {
    res.send(`<p>puhelinluettelossa on ${persons.length} henkilön tiedot</p><span>${new Date().toString()}</span>`);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});