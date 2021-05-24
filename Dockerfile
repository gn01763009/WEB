FROM node:slim

WORKDIR /app

ADD . /app

CMD gsutil rsync -rd -x https://github.com/gn01763009/web.git . gs://reggie.life
