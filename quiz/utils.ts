import fs from "fs";
import path from "path";
import { User } from "./types";

const dataFile = '../data/users.json';

let users: User[];

const readDataFile = () => {
    fs.readFile(path.resolve(__dirname, dataFile), (err, data) => {
        console.log('reading file ... ');
        if (err) throw err;
        users = JSON.parse(data.toString());
    });
};

const writeToDataFile = (newUser: User) => {
    fs.writeFile(path.resolve(__dirname, dataFile), JSON.stringify(users), (err) => {
        if (err) console.log('Failed to write');
        else console.log('User Saved');
    });
}

export { users, readDataFile, writeToDataFile };