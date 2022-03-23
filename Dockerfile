FROM node:16.13.0-alpine

WORKDIR /usr/app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build
EXPOSE 80

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD dockerize node integrationTests/runExampleReport.js -wait http://web:80 -timeout 30s -wait-retry-interval 3s
