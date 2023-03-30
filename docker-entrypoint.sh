#!/bin/sh

if [ -z "$(ls -A /code)" ]; then
  cp -ar /app/. /code
fi

cd /code
npm install # Unclear why we have to do this again
exec npm run dev -- --host
