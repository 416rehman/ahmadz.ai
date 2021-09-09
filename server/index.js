import dotenv from 'dotenv'
dotenv.config()
import cookieSession from "cookie-session";
import login from './routes/auth/auth.js'
import auth from "./helpers/auth.js"

import express from "express";

const app = express();
app.use(
    cookieSession({
        secret: process.env.COOKIE_SECRET
    })
);
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use("/auth", login);

app.use(async (req, res, next) => {
    if (req.session && req.session.githubId === process.env.GITHUB_ID) {
        req.session.user = await auth.fetchGitHubUser(req.session.access_token)
        next()
    } else {
        return res.status(401).send(`You are not authorized!`)
    }
})

app.get("/", (req, res)=>{
    res.json(req.session.user)
});

app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});