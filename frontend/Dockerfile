FROM node:8.9.4-alpine

# Run this to prevent node-gyp related error when using Linux/Windows
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install && apk del .gyp

# Bundle app source
COPY . /usr/src/app/

CMD npm run build
