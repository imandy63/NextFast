# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install TypeScript globally (optional if you need TypeScript for your project)
RUN npm install -g typescript ts-node

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]