const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const path = require('path');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../', '/client/public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});