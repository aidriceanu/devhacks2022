#!/bin/sh

export API_HOST=${API_HOST:="http://127.0.0.1:3000"}

export STATIC_FOLDER="/usr/share/nginx/html"

# Removing trailing slash if exists
API_HOST=${API_HOST%/}

echo "Replace from env vars..."

find $STATIC_FOLDER -type f -exec sed -i "s,REACT_APP_API_HOST_STRING_REPLACE,$API_HOST,g" {} \;

exec "$@"
