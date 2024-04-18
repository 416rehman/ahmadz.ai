# syntax=docker/dockerfile:1

FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately to leverage caching
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the source files into the image.
COPY . .

# Check if .env file exists, raise error if not found
RUN test -f .env || (echo "ERROR: .env file not found" && exit 1)

# Copy the .env file into the image
COPY .env .env

# Build the React code
RUN npm run build

# Stage 2 - Serve the built React code
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy the built React code from the previous stage
COPY --from=build /usr/src/app/build ./build

# Install serve globally
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Serve the built React code on port 80
CMD ["serve", "-s", "build", "-l", "80"]