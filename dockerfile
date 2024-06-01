 
FROM node:18-alpine AS node

WORKDIR /usr/src/app
COPY package*.json ./

# Install project dependencies
RUN npm install
COPY . .
RUN node --version 
EXPOSE 3000
CMD ["npm","run","start"]

