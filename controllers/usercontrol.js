import { v4 as uuidv4 } from "uuid";
let users = [];
export const getUSer =(req, res) => {
    console.log(users);

    res.send(users);
}

export const CreateUSer = (req, res) => {

    const user = req.body;

    users.push({ ... user, id: uuidv4()});
    res.send(`USer adicionado com nome ${user.name} na BD`);

 }