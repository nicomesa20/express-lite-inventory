import express from 'express';
import 'dotenv/config';
import routes from './routes';
import { connectToMongodb } from './db'


const port = process.env.PORT || 5000;

// TODO: db connection
const app = express();
connectToMongodb()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))