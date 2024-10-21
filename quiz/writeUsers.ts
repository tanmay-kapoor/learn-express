import express, { Response } from 'express';
import { User, UserRequest } from "./types";
import { users, writeToDataFile } from "./utils";

const router = express.Router();

router.post('/adduser', (req: UserRequest, res: Response) => {
    const newUser = req.body as User;
    users.push(newUser);
    writeToDataFile(newUser);
    res.send('done');
});

export default router;