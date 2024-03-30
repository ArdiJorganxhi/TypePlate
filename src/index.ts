import express from "express";
import 'reflect-metadata'
import { AppDataSource } from "./config/data-source";
import { authRouter } from "./routes/auth.route";

AppDataSource.initialize()
.then(async () => {

}).catch()

const app = express()
app.use(express.json())
const port = 8080

app.use('/api/v1/auth', authRouter)

app.get('/', (req, res) => {
    res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
    console.log('Server is running on port:' + port)
})