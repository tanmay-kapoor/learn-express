import fs from "fs";
import path from "path";
import { User, UserRequest } from "./types";
import { NextFunction, Response } from "express";

const dataFile = '../data/users.json';

let users: User[];

const addMsgToRequest = (req: UserRequest, res: Response, next: NextFunction) => {
    if (users) {
        req.users = users;
        next();
    } else {
        return res.json({
            error: {message: 'users not found', status: 404}
        });
    }
};

const readDataFile = () => {
    fs.readFile(path.resolve(__dirname, dataFile), (err, data) => {
        console.log('reading file ... ');
        if (err) throw err;
        users = JSON.parse(data.toString());
    });
};

const writeToDataFile = (users: User[] | undefined) => {
    fs.writeFile(path.resolve(__dirname, dataFile), JSON.stringify(users), (err) => {
        if (err) console.log('Failed to write');
        else console.log('User Saved');
    });
}

export { addMsgToRequest, readDataFile, writeToDataFile };