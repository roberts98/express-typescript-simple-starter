import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Express typescript starter'));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!`));
