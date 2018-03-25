FROM node:8.9.4-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

RUN apk add --no-cache bash postgresql-client zip

COPY . /usr/src/app
RUN chmod a+x ./wait_for_db.sh

