import Express from "express";

import { CreateUSer, getUSer} from '../controllers/usercontrol.js';

const router = Express.Router();



 router.get('/', getUSer);

 router.post('/', CreateUSer);


 router.get('/:id',(req, res) => {
    const { id } = req.params;
    const foundUSer = users.find((user) => user.id ==id);
    res.send(foundUSer);
 })

 router.patch('/:id', (req, res) => { 
    const {id} =req.params;
    const { name, lastName, Idade } =req.body;
    const user = users.find((user) => user.id ==id);
    
    if(name) user.name =name;
    if(lastName) user.lastName = lastName;
    if(Idade) user.Idade= Idade;
    res.send(`USer adicionado com nome ${user.id} na BD`);
 })

 export default router;