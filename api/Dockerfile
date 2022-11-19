FROM node:18.12.1-alpine

RUN apk --no-cache add --update python3 make g++\
    --virtual .build_deps \
    build-base

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile \
    && yarn cache clean

COPY . .

CMD [ "yarn", "run", "prod" ]
