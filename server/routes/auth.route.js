// import { express, Router } from "express";
import express from 'express';
import { Router } from 'express';

// const { express, Router } = pkg;

const router = Router();
const app = express();

router.get("/", async (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

router.get("/about", async (req, res) => {
    res.send('<h1>About Page</h1>');
});

// console.log(router);

export default router;
