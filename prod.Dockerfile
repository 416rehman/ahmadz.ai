# build environment
FROM node:lts-alpine3.14 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
# install from package-lock.json
RUN npm ci --silent
RUN npm install react-scripts@4.0.3 -g --silent
# copy everything from the build environment to the workdir
COPY . ./
# run the build
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]