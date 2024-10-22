import express, { Response } from 'express';
import { UserRequest } from './types';

const router = express.Router();

router.get('/usernames', (req: UserRequest, res: Response) => {
    let usernames = req.users?.map((user) => {
        return {id: user.id, username: user.username};
    });
    res.send(usernames);
});

router.get('/username/:name', (req: UserRequest, res: Response) => {
    const emails =
        req.users?.filter((user) => user.username === req.params.name)
            .map((user) => {
                return {id: user.id, email: user.email};
            });
    res.send(emails);
});

export default router;