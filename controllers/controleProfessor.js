import { v4 as uuidv4 } from "uuid";
let users = [];
export const getUSer =(req, res) => {
    console.log(users);

    res.send(users);
}
