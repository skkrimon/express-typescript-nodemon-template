import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        "status": "ok"
    });
});

app.listen(port, () => {
    console.log(`Server is listening on: 'http://localhost:${port}'`)
})