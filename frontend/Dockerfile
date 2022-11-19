# build environment
FROM node:18.12.1-alpine as build

# Default replace vars for entrypoint
# Should be removed after we able to configure at runtime
ARG REACT_APP_API_HOST=REACT_APP_API_HOST_STRING_REPLACE

RUN apk --no-cache add --update python3 make g++\
    --virtual .build_deps \
    build-base

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# nginx
FROM nginx:1.23.2-alpine

COPY docker-files/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-files/entrypoint.sh /entrypoint.sh

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
