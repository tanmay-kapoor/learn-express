import express, { Response } from 'express';
import { User, UserRequest } from "./types";
import { writeToDataFile } from "./utils";

const router = express.Router();

router.post('/adduser', (req: UserRequest, res: Response) => {
    const newUser = req.body as User;
    req.users?.push(newUser);
    writeToDataFile(req.users);
    res.send('done');
});

export default router;