FROM node:16-alpine

WORKDIR /home/api

COPY package.json .
COPY package-lock.json .

RUN npm install --force

COPY . .

CMD npm run start:dev