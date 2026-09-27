console.log("🔥 MY APP.JS IS LOADED");
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).json({
        message: "hello world",
    });
});

app.post("/api/auth/register", (req, res) => {
    const { email, name, password } = req.body;

    // save it to db

    const token = jwt.sign(
        {
            email,
            name
        },
        "704239ebd94de90492f8600469e8f5e5e016db7ef1d933b8a9018bd4ec3cf628bef9f858ed5db6834d5bd04fd5f7529b704d6fb759362e9d"
    );

    res.status(201).json({
        message: "user created successfully",
        data: {
            user: {
                name,
                email
            },
            token
        }
    });
});

export default app;