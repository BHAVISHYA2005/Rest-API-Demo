import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, Welcome to my API!' });
});

const PORT= 3000;
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);

});

