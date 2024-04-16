# Ahmadz.ai
<p align="center">
  <a href="http://www.ahmadz.ai"><img alt="icon" src="https://img.shields.io/badge/Live-Demo-blueviolet?style=flat-square"></a>
</p>

**Simple portfolio template built with React.**

## Installation

1. Clone the repository
2. Rename the `sample.env` file to `.env` and change the `REACT_APP_DATA_GITHUB` to your github `username/repo`.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.

Fill the following in the `.env` file if you want the contact section to function properly.

```
REACT_APP_EMAILJS_SERVICE_ID //Your emailJs Service ID
REACT_APP_TEMPLATE_ID  //Your emailJs template ID
REACT_APP_USER_ID //Your emailJs user ID
```

## Updating the data
Once you set the `REACT_APP_DATA_GITHUB` in the `.env` file, the data will be fetched from the `data/*.json` files in the repository. 
You can update the data by changing the `data/*.json` files in the repository.

## Running in docker
A Dockerfile is provided. Run the following command to use the `.env` file in the image.
```sh
# Build the image
docker build -t portfolio .

# Run the image
docker run -p 3000:3000 --env-file .env portfolio
```

## Screenshots
![Screenshot](https://i.imgur.com/Ejy5dJx.png)
![Screenshot2](https://i.imgur.com/dTPRTJr.png)
