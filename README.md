# Ahmadz.ai
<p align="center">
  <img src="https://img.shields.io/badge/Live-Demo-blueviolet?style=flat-square">
</p>
Simple portfolio template built with React with backend ready to go for any advanced cloud deployment strategies.

Data is read from `client/src/data` folder and rendered on the website.

**```!!!The backend is not required to use this template.!!!```**

The backend is there so that in the future if any server-sided functionality (a personal blog maybe?) is required, you can use it. 

To start using the backend,
1. Create a new github app (https://github.com/settings/developers)
2. rename `sample.env` to `.env` and fill it up with your github app info.
3. run `npm i` in the server directory to install all the packages and then `npm start` to start the server
4. test if everything works by visiting `localhost:4000/auth/login` to start the OAuth process, if you are redirected to your `HOMEPAGE` (set in `.env`), the OAuth works.
5. You can expand the backend now by adding any models or CRUD endpoints to be used in your react app. Enjoy!

![Screenshot](https://i.imgur.com/Ejy5dJx.png)
![Screenshot2](https://i.imgur.com/dTPRTJr.png)
