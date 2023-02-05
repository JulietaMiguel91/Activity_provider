import express from 'express'; 
import bodyParser from 'body-parser';

import userRoutes from './routes/user.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.set("view engine","ejs");
app.use('/user', userRoutes);  

app.get('/', (req, res) => res.render('./index')); 

app.listen(PORT, () => console.log(`Server is running on port: http:localhost${PORT}`));

