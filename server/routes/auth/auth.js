import express from 'express'
const router = express.Router()
import auth from '../../helpers/auth.js'

router.get('/login', function (req, res) {
    const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIEND_ID}&redirect_uri=http://localhost:5000/api/auth/callback`
    res.redirect(url)
})

router.get('/callback', async function (req, res) {
    const code = req.query.code;
    const access_token = await auth.getAccessToken({code, client_id: process.env.GITHUB_CLIEND_ID, client_secret: process.env.GITHUB_SECRET})
    const user = await auth.fetchGitHubUser(access_token);
    if (user) {
        req.session.access_token = access_token;
        req.session.githubId = user.id;
        res.redirect(`http://localhost:5000`)
    } else {
        res.send("Login did not succeed!");
    }
})

router.get("/logout", (req, res) => {
    if (req.session) req.session = null;
    return res.redirect("http://localhost:5000/");
});



export default router