import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.end("Hello World");
    console.log("ENDPOINT - GET '/'");
    
})

export default app; 