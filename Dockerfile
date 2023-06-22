# Stage1:  base image
FROM node:18.12.1-alpine3.15 as build
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . ./

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:1.18.0-alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (default for HTTP)
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]