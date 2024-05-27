# Use the official Node.js image from the Docker Hub
FROM node:22

ARG SERVER
ENV SERVER $SERVER


# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Define the command to run the app
# nodemon -r dotenv/config ./bin/www
CMD ["npm", "run", "dev"]
