#!/bin/sh

if [ -z "$(ls -A /code)" ]; then
  cp -ar /app/. /code
fi

cd /code
exec npm run dev -- --host
