FROM node:18.18.2
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./bin ./bin
EXPOSE 3000
CMD ["node", "./bin/server.js"]
