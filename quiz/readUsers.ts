import express, { NextFunction, Response } from 'express';
import { UserRequest } from './types';
import { users, readDataFile } from './utils';

const router = express.Router();

readDataFile();

router.use((req: UserRequest, res: Response, next: NextFunction) => {
    if (users) {
        req.users = users;
        next();
    } else {
        return res.json({
            error: {message: 'users not found', status: 404}
        });
    }
});

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