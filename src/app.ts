import express, { json, Request, Response, urlencoded } from 'express';

const app = express();

app.use(json());
app.use(urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.end("Hello World");
    console.log("ENDPOINT - GET '/'");

})

export default app; 