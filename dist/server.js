const express = require('express');

const app = express();
const dir = __dirname;

app.use(express.static(dir));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});