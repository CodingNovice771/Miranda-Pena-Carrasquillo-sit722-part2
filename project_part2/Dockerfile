# Dockerfile for book_catalog microservice
# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Define environment variables (if any)
ENV POSTGRES_DB=library_db_yaip
ENV POSTGRES_USER=miranda_pena_carrasquillo
ENV POSTGRES_PASSWORD=jRctnregW3LxOu5yyQPngdskliFaZfHm
ENV POSTGRES_HOST=dpg-cr2r8gjv2p9s739c98pg-a.render.com
ENV POSTGRES_PORT=5432

# Command to run the application
CMD ["node", "app.js"]
