# Use the Node.js image as a base image
FROM node:20-alpine as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the source code
COPY . .

# Check if .env file exists
RUN test -f .env || (echo "Error: .env file not found" && false)

# Build the React code
RUN npm run build

# Use Nginx as a lightweight web server to serve the React application
FROM nginx:alpine

# Copy the built React code from the previous stage to the Nginx server directory
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Expose the port that Nginx listens on
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
