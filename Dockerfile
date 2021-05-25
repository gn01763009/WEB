FROM node:slim

WORKDIR /app

ADD . /app

CMD node server.js
