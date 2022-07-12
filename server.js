require('dotenv').config();
const express = require('express');
const cors = require('cors')
// const connectDB = require('./config/db');


const app = express();

app.use(cors());
app.use(express.json({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.use('/api/users', require('./routes/api/users'));
app.use('/api/cuentas', require('./routes/api/cuentas'));
app.use('/api/orgs', require('./routes/api/orgs'));




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });	